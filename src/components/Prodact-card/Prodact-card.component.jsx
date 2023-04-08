import "./Product-card.styles.scss";
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../Button/Button.component";

const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemsToCart } = useContext(CartContext);

  const handleClick = () => {
    addItemsToCart(product);
  };

  return (
    <div className="product-card-container">
      <img className="image" src={imageUrl} alt="product" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={handleClick} btnType="inverted">
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
