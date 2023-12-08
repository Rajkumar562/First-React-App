import React from "react";

interface Props {
  cartItems: string[];
  Clear: () => void;
}
const Cart = ({ cartItems, Clear }: Props) => {
  return (
    <>
      <div>Cart:</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={Clear}>Clear</button>
    </>
  );
};

export default Cart;
