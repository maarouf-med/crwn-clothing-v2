import "./checkout-item.styles.scss";
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;

  const { removeItemFromCart, decrementCartItemCount, addItemsToCart } =
    useContext(CartContext);

  const decrementCountHandler = () => decrementCartItemCount(cartItem);

  const removeCartItemHandler = () => removeItemFromCart(cartItem);

  const addCartItemHandler = () => addItemsToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className=" arrow" onClick={decrementCountHandler}>
          &#8249;
        </span>
        <div className="value">{quantity}</div>
        <span className=" arrow" onClick={addCartItemHandler}>
          &#8250;
        </span>
      </div>
      <span className="price">{price}</span>
      <span onClick={removeCartItemHandler} className=" remove-button">
        &#215;
      </span>
    </div>
  );
};

export default CheckoutItem;
