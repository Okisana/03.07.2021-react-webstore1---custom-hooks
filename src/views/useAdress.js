import { useState } from "react";

export const useAdress = () => {
  const [shippingAddress, setAdress] = useState({});

  const onInputChange = (name) => (e) => {
    setAdress({ ...shippingAddress, [name]: e.target.value });
  };

  return {
    shippingAddress,
    onInputChange,
  };
};
