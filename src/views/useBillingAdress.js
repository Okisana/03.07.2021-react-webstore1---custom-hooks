import { useState } from "react";

export const useBillingAdress = () => {
  const [billingAddress, setAdress] = useState({});

  const onBillingChange = (name) => (e) => {
    setAdress({ ...billingAddress, [name]: e.target.value });
  };

  return {
    billingAddress,
    onBillingChange,
  };
};
