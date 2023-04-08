import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import "./navigation.styles.scss";

import logo from "../../assets/crown.svg";
// import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";

import { SignOutUser } from "../../utils/firebase";

import Cart from "../Cart/Cart.component";

import CartDropdown from "../Cart-dropdown/Cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const handelClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>

        <nav className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          {currentUser ? (
            <span onClick={SignOutUser} className="nav-link">
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <Link className="nav-link" onClick={handelClick}>
            <Cart />
          </Link>
        </nav>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
    // navbar top level component.
    // Outlet is render everything else inside navbar
  );
};

export default Navbar;
