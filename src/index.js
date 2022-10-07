import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import "./index.scss";
import App from "./App";
import { UserProvider } from "./context/user.context";
import { CategoriesProvider } from "./context/categories.context";
import { CartProvider } from "./context/cart.context";

import { store, persistor } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        {/* <CategoriesProvider> */}
        <CartProvider>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </CartProvider>
        {/* </CategoriesProvider> */}
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
