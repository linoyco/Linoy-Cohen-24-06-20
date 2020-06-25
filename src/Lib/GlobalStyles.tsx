import { createGlobalStyle } from 'styled-components';

export interface IPropsGlobalStyles {
    body: string;
    text: string;
    toggleBorder: string;
    background: string;
};

export const GlobalStyles: any = createGlobalStyle<IPropsGlobalStyles>`
  body {
    background: ${(props: IPropsGlobalStyles) => props.body};
    color: ${(props: IPropsGlobalStyles) => props.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    border: 4px solid black;
    height: 100%;
    width: 100%;
  }
  `
