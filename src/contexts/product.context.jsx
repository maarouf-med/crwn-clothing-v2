import { createContext, useState } from "react";
import shopData from "../shop-data.json";

export const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(shopData);

  const value = {
    products,
    setProducts,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
