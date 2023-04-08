import "./shop.styles.scss";

import { useContext } from "react";
import { ProductContext } from "../../contexts/product.context";

import ProductCard from "../../components/Prodact-card/Prodact-card.component";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
