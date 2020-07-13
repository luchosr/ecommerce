import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./WithSpinnerStyles.jsx";
import { ReactReduxContext } from "react-redux";

const WithSpinner = (WrappedComponent) => {
    const Spinner = ({
        isLoading,
        ...otherProps,
      })=>{
    return isLoading? (<SpinnerOverlay>
        <SpinnerContainer/>
    </SpinnerOverlay>) : (<WrappedComponent {otherProps}/>)}ç
    return Spinner;
};

export default WithSpinner;
