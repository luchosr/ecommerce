import React, { useState } from "react";
import FormInput from "../formInput/FormInput";

import "./SignInStyles.scss";

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({
      email: "",
      password: "",
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({ [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and passsword</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={state.email}
          required
          label="email"
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          value={state.password}
          required
          label="password"
          handleChange={handleChange}
        />

        <input type="submit" value="submit form" />
      </form>
    </div>
  );
};

export default SignIn;
