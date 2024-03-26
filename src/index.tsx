// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import {Provider} from 'react-redux';
import {store} from './store/index';
import {checkAuthAction, fetchOffers} from './store/api-actions';

store.dispatch(fetchOffers());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ErrorMessage />
    <App />
  </Provider>
);
