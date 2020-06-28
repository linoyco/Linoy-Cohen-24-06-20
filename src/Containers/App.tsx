import React from 'react';
import AppRoutes from './AppRoutes';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderBar from '../Components/HeaderBar';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { changeModeStyle, currentGeolocation } from '../State/Actions/App';
import { useHistory } from "react-router-dom";
import * as Routes from "../Lib/Routes";

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

const StyledError: any = styled.p`
	font-size: 12px;
	color: red;
    height: 12px;
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

  const changeMode = () => {
    mode === 'light' ? dispatch(changeModeStyle('dark')) : dispatch(changeModeStyle('light'));
  }

  const globalErr = (error ? <StyledError>{error}</StyledError> : null);

  const history = useHistory();

  const navigateToFavorites = () => {
    history.push('/favorites');
  }

  const navigateToHome = () => {
    history.push(Routes.HOME);
  }

  return (
    <DivStyle>
      <GlobalStyles backgroundColor={mode === 'light' ? 'white' : '#4E5D89'} textColor={mode === 'light' ? 'black' : 'white'} />
      <HeaderDiv>
        <HeaderBar
          changeMode={changeMode}
          onClickFavorites={navigateToFavorites}
          onClickHome={navigateToHome}
        />
      </HeaderDiv>
      {globalErr}
      <AppRoutes />
    </DivStyle>
  );
}

export default App;
