import "./checkout.styles.scss";
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/Checkout-item/Checkout-item.component";

const CheckoutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span className="header-block">product</span>
        <span className="header-block">description</span>
        <span className="header-block">quantity</span>
        <span className="header-block">price</span>
        <span className="header-block">remove</span>
      </div>
      <div className="checkout-items">
        {cartItems.map((cartItem) => (
          <CheckoutItem cartItem={cartItem} key={cartItem.id} />
        ))}
      </div>
      <h2 className="total">Total: ${cartTotal}</h2>
    </div>
  );
};

export default CheckoutPage;
