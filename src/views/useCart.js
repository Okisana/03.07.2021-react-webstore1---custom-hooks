import { useState } from "react";
import product7 from "../images/shop/dMidi.jpg";
import product8 from "../images/shop/dBlack.jpg";
import product9 from "../images/shop/dStripe.jpg";

export const useCart = () => {
  // const defaultCartContents = [
  //   {
  //     id: 0,
  //     name: "Floral dress",
  //     price: 20.0,
  //     quantity: 1,
  //     image: product7,
  //   },
  //   {
  //     id: 1,
  //     name: "Black dress",
  //     price: 30.0,
  //     quantity: 1,
  //     image: product8,
  //   },
  //   {
  //     id: 2,
  //     name: "Stripe dress",
  //     price: 10.0,
  //     quantity: 1,
  //     image: product9,
  //   },
  // ];

  const [cart, setCart] = useState([]);

  const addNewProduct = (product) => {
    if (cart.some((cartItem) => cartItem.id === product.id)) {
      alert("You choose this product already!");
      return;
    }
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const diminishCount = (id) => {
    const indexToModify = cart.findIndex((cartItem) => cartItem.id === id);
    if (cart[indexToModify].quantity === 1) {
      return;
    }
    cart[indexToModify].quantity -= 1;

    setCart([...cart]);
  };

  const onDiminishCount = (cartItem) => () => diminishCount(cartItem.id);

  const addCount = (id) => {
    const indexToModify = cart.findIndex((cartItem) => cartItem.id === id);
    cart[indexToModify].quantity += 1;

    setCart([...cart]);
  };

  const onAddCount = (cartItem) => () => addCount(cartItem.id);

  const removeProduct = (id) => {
    // setCart(cart.filter((cartItem) => cartItem.id !== id));
    const indexToDelete = cart.findIndex((cartItem) => cartItem.id === id);
    cart.splice(indexToDelete, 1);
    setCart([...cart]);
  };

  return {
    cart,
    onDiminishCount,
    onAddCount,
    removeProduct,
    addNewProduct,
  };
};
