import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homePage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInUp from "./pages/signInUp/SignInUp";
import { auth } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
