import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import logo from "../../assets/crown.svg";
// import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";

import { SignOutUser } from "../../utils/firebase";

import Cart from "../Cart/Cart.component";

import CartDropdown from "../Cart-dropdown/Cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const handelClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img className="logo" src={logo} alt="Logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={SignOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <NavLink onClick={handelClick}>
            <Cart />
          </NavLink>
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
    // navbar top level component.
    // Outlet is render everything else inside navbar
  );
};

export default Navbar;
