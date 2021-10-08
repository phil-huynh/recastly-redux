import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import reduxStore from './store/store.js';
import handleSearchChange from './actions/search.js';


ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById('app'),
  () => handleSearchChange('react tutorials')(reduxStore.dispatch)
);