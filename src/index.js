import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from 'components/App/App';

const theme = {
  size: {
    title: '23px',
    subtitle: '15px',
    button: '17px',
    small: '13px',
  },

  icon: {
    small: '27px',
    medium: '40px',
  },

  colors: {
    white: '#ffffff',
    black: '#222',
    grey: 'rgb(197, 196, 196)',
    link: '#bebebe',
    primary: '#e7b601',
    green: '#495057',
    primaryText: '#212121',
    secondaryText: '#757575',
  },

  animate: {
    transition: '500ms cubic-bezier(0.075, 0.82, 0.165, 1)',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
