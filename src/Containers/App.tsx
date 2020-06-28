import React, { useState, useEffect } from 'react';
import AppRoutes from './AppRoutes';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderBar from '../Components/HeaderBar';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { changeModeStyle, setLocation } from '../State/Actions/App';
import { searchByCity } from '../State/Actions/Home';

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

  const mode: string = useSelector((state: any) => state.app.mode);
  const localFCMode: boolean = useSelector((state: any) => state.home.fCMode);

  useEffect(() => {
    getGeolocation();
    dispatch(setLocation('215854', 'Tel Aviv'));
    dispatch(searchByCity('215854', localFCMode));
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
    mode === 'light' ? dispatch(changeModeStyle('dark')) : dispatch(changeModeStyle('light'));
  }

  return (
    <DivStyle>
      <GlobalStyles backgroundColor={mode === 'light' ? 'white' : '#4E5D89'} textColor={mode === 'light' ? 'black' : 'white'} />
      <HeaderDiv>
        <HeaderBar changeMode={changeMode} />
      </HeaderDiv>
      <AppRoutes />
    </DivStyle>
  );
}

export default App;
