import { Routes, Route } from "react-router-dom";

import Navigation from "./components/routers/navigation/navigation-component";
import Home from "./components/routers/home/home-component";
import Shop from "./components/routers/shop/shop-component";
import SignIn from "./components/routers/sign-in/sign-in-component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
