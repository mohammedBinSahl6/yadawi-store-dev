import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import whiteLogo from "../imgs/LOGO.svg";
import { LoginCurve, ShoppingCart } from "iconsax-react";

export default function Navbar() {
  return (
    <nav className="w3-bar w3-black">
      <Link href="#" className="w3-bar-item w3-button">
        <img src={whiteLogo} alt="logo" className="nav-logo" />
      </Link>
      <Link href="#" className="w3-bar-item w3-button">
        SHOP
      </Link>
      <Link href="#" className="w3-bar-item w3-button">
        CONTACT
      </Link>
      <Link href="#" className="w3-bar-item w3-button">
        ABOUT
      </Link>
      <Link href="#" className="w3-bar-item w3-button">
        MY CART
        <ShoppingCart size="20" color="#ffffff" />
      </Link>

      <Link to="/login" className="w3-bar-item w3-button nav-login__icon">
        <LoginCurve size="32" color="#ffffff" />
      </Link>
    </nav>
  );
}
