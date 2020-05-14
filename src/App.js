import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homePage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInUp from "./pages/signInUp/SignInUp";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log("el user es", user);
      return function cleanup() {
        unsubscribeFromAuth();
      };
    });
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
