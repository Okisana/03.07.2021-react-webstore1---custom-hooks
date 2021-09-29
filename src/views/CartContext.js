import * as React from "react";
import { useCart } from "./useCart";

const CartContext = React.createContext();

export function CartProvider({ children }) {
  const value = useCart(); // =   const { cart, onDiminishCount, onAddCount, removeProduct } = useCart();
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}
