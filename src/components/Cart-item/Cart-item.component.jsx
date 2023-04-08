import "./Cart-item.styles.scss";

const CartItem = ({ item }) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt="procuct" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
