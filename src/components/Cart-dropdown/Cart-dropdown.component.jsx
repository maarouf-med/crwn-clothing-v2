import "./cart-dropdown.styles.jsx";
import Button from "../Button/Button.component";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { useNavigate } from "react-router-dom";

import CartItem from "../Cart-item/Cart-item.component";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigation = useNavigate(); //its lik Link go to path decided

  const handleGoToCheckout = () => {
    navigation("/checkout");
    setIsCartOpen(false);
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>No card items</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
