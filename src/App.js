import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Contact from "./routes/contact/contact.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/Checkout/Checkout.component";

const App = () => {
  return (
    // index : if path match / render component
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
