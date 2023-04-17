import "./Cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./Cart-icon.styles";

const Cart = () => {
  const { itemCount } = useContext(CartContext);

  // cartItems.reduce((cur, acc) => console.log(cur));

  return (
    <CartIconContainer>
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default Cart;
