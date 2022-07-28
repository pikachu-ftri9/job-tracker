import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './scss/styles.scss';

render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById('root')
);
