import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import { Provider } from 'react-redux';

import MainPage from './components/MainPage/MainPage';
import store from './tools/store';

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
  }  
`;  

ReactDOM.render(
  <Provider store={store}>      
      <GlobalStyles />
      <Reset />
      <MainPage />
  </Provider>,
  document.getElementById('root')
);
