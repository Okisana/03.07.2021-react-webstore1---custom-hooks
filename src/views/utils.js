export function totalOneProduct(cartItem) {
  return (cartItem.price * cartItem.quantity).toFixed(2);
}

export const totalAll = (cart) => {
  return cart.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.price;
  }, 0);
};
