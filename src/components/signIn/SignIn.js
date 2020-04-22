import React, { useState } from "react";
import "./SignInStyles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and passsword</span>
      <form action="">
        <input
          name="email"
          type="email"
          value={email}
          required
          onChange={handleEmail}
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={password}
          required
          onChange={handlePassword}
        />
        <label>Password</label>

        <input type="submit" value="submit form" />
      </form>
    </div>
  );
};

export default SignIn;
