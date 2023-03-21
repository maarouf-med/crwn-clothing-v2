import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import logo from "./crown.svg";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="logo crown" />
        </Link>
        <nav className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
