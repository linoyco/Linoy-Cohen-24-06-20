import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import AppRoutes from './AppRoutes';
import { currentGeolocation } from '../State/Actions/App';

interface IPropsGlobalStyles {
  backgroundColor: string;
  textColor: string;
}

const GlobalStyles: any = createGlobalStyle<IPropsGlobalStyles>`
  html{    
    background: ${(props: IPropsGlobalStyles) => props.backgroundColor};
    color: ${(props: IPropsGlobalStyles) => props.textColor};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    // overflow: hidden;
  }
  
  body{
    margin: 0px;
  }

  .hhFWoK{
    font-size: 12px;
    color: red;
    height: 12px;
    font-weight: bold;
  }
`;

const App: React.FunctionComponent = () => {
  const dispatch: Dispatch = useDispatch();

  const mode: string = useSelector((state: any) => state.app.mode);
  const error: string = useSelector((state: any) => state.app.errorMessage);

  React.useEffect(() => {
    getGeolocation();
  }, []);

  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      dispatch(currentGeolocation(lat, lon));
    }, function (err) {
      console.log(err);
    });
  }

  const globalErr = (error ? <p className='hhFWoK'>{error}</p> : null);

  return (
    <div>
      <GlobalStyles
        backgroundColor={mode === 'light' ? 'white' : '#4E5D89'}
        textColor={mode === 'light' ? 'black' : 'white'} />
      {globalErr}
      <AppRoutes />
    </div>
  );
}

export default App;
