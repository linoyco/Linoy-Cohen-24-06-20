import React, { useState } from 'react';
import AppRoutes from './AppRoutes';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderBar from '../Components/HeaderBar';

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
  margin-bottom: 5%;
`;

const App: React.FunctionComponent = () => {

  const [theme, setTheme] = useState('light');

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
