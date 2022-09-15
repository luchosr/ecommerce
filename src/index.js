import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.scss';
import App from './App';
import { UserProvider } from './context/user.context';

import { store, persistor } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <UserProvider>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </UserProvider>
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,

  document.getElementById('root')
);
