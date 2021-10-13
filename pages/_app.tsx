// import '../styles/globals.css';
import React, { useState, useCallback } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Nav from '../src/components/nav';
import themes, { Theme } from '../src/Themes/themes';

const GlobalStyles = createGlobalStyle`
  html,
  body{
    background-color: ${(props) => props.theme.backgroundColor};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: ${(props) => props.theme.defaultTextColor}
  }

  a{ 
    color: inherit;
    text-decoration: none;
  }

  *{
    box-sizing: border-box;
  }
`;

const defaultTheme = themes[0];

const MyApp = ({ Component, pageProps }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme);
  console.log(currentTheme);
  const handleThemeChange = useCallback(
    (theme: Theme) => {
      if (currentTheme.name === theme.name) {
        console.log('hey');
        return;
      }
      setCurrentTheme(theme);
    },
    [currentTheme]
  );
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <div>
        <Nav onThemeChange={handleThemeChange} />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default MyApp;
