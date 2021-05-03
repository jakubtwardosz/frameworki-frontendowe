import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';

import MainPage from './components/MainPage/MainPage';

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
  }
`

ReactDOM.render(
  <>      
      <GlobalStyles />
      <Reset />
      <MainPage />
  </>,
  document.getElementById('root')
);
