import "./shop.styles.scss";
import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../Categories-preview/Categories-preview.component";
import Category from "../Category/Category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
