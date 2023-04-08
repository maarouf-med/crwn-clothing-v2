import "./cart-dropdown.styles .scss";
import Button from "../Button/Button.component";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { useNavigate } from "react-router-dom";

import CartItem from "../Cart-item/Cart-item.component";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigation = useNavigate(); //its lik Link go to path decided

  const handleGoToCheckout = () => {
    navigation("/checkout");
    setIsCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <Button onClick={handleGoToCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
