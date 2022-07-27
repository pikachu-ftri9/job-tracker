import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
// import store from './store.js';
import styles from './scss/styles.scss';

render(
<<<<<<< HEAD

    <App />,
  document.getElementById('root'),
=======
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
>>>>>>> 07e4fd0caf3ad3e0324e1c1656785cef0a0fa484
);
