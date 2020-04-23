import React from "react";

import "./FormInputStyles.scss";

const FormInput = ({ handleEmail, handlePassword, label, ...otherProps }) => {
  return (
    <div className="group">
      <input type="text" className="form-input" />
    </div>
  );
};

export default FormInput;
