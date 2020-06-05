export const addItemtoCart = (cartItems, cartItemToAdd) => {
  const existingartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingartItem) {
    return cartItems.map( cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 }:  );
  }

  return[...cartItems,{...cartItemToAdd , quantity: 1}]
};
