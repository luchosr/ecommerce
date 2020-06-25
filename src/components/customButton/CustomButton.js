import React from "react";
import "./CustomButtonStyles.scss";

import { CustomButtonContainer } from "./CustomButtonStyles";

const CustomButton = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
