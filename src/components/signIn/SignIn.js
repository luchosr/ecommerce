import React, { useState } from "react";
import FormInput from "../formInput/FormInput";
import CustomButton from "../customButton/CustomButton";

import { signInWithGoogle } from "../../firebase/firebase.utils";

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
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
