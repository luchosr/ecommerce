import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const onToken = (token) => {
    console.log(token);
    alert("Payment successfull");
  };
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GwswsJID5xK3amL9va45Xz9uHzNURcSzjJlhQ1U0aivwBugRpGQCeLNc2Swmygg9HZCcFsmK1zlaje7u4YWQHmV00xqbixwvL";
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
