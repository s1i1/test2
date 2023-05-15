import React from 'react';
import ReactDOM from 'react-dom/client';
import { store, persistor } from '@store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import App from './app';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
