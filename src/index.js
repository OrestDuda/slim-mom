import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import "./assets/fonts/fonts.scss"
import App from './Components/App';
import './services/baseURL';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store from './Redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
