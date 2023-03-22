import "../node_modules/bulma/css/bulma.min.css";

import { Routes, Route } from "react-router-dom";

import Navigation from "./components/routers/navigation/navigation-component";
import Home from "./components/routers/home/home-component";
import Shop from "./components/routers/shop/shop-component";
import Authentication from "./components/authentication/authentication-component";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
