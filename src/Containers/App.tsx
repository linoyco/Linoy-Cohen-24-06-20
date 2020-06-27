import React, { useState, useEffect } from 'react';
import AppRoutes from './AppRoutes';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderBar from '../Components/HeaderBar';
import { useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { setLocation } from '../State/Actions/App';

interface IPropsGlobalStyles {
  backgroundColor: string;
  textColor: string;
};

const GlobalStyles: any = createGlobalStyle<IPropsGlobalStyles>`
  html{    
    background: ${(props: IPropsGlobalStyles) => props.backgroundColor};
    color: ${(props: IPropsGlobalStyles) => props.textColor};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    font-weight: bold;
    
    height: 100%;
    width: 100%;
  }
  body{
    height: 100%;
    width: 100%;
    margin: 0px;
  }
  #root {
    height: 100%;
  }
`;

const DivStyle: any = styled.div`
  height: 100%;
  width: 100%;
  margin: 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const HeaderDiv: any = styled.header`
  width: 100%;
`;

const App: React.FunctionComponent = () => {
  const dispatch: Dispatch = useDispatch();

  const [theme, setTheme] = useState('light');

  const defaultLocation = useSelector((state: any) => state.app.location);

  useEffect(() => {
    // setTimeout(() => {
    //   // dispatch(setLocation('Haifa'));
    // }, 3000);
    getGeolocation();
  }, []);

  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      console.log(latitude, longitude);
    }, function (err) {
      console.log(err);
    });
  }

  const changeMode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <DivStyle>
      <GlobalStyles backgroundColor={theme === 'light' ? 'white' : '#4E5D89'} textColor={theme === 'light' ? 'black' : 'white'} />
      <HeaderDiv>
        <HeaderBar />
      </HeaderDiv>

      <AppRoutes />
      <button onClick={() => changeMode()}>Switch Theme</button>
    </DivStyle>
  );
}

export default App;
