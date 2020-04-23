import React, { useState } from "react";
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
        <input
          name="email"
          type="email"
          value={state.email}
          required
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={state.password}
          required
          onChange={handleChange}
        />
        <label>Password</label>

        <input type="submit" value="submit form" />
      </form>
    </div>
  );
};

export default SignIn;
