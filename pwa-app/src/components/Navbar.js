import React, { useState } from "react";

//Styles
import styles from "./Navbar.module.css";

//Icons
import MenuIcon from "../assets/img/menu.png";
import Logo from "../assets/img/logo.png";
import ShoppingIcon from "../assets/img/shopping.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.hamburgerMenu} onClick={() => setMenu(!menu)}>
        <img src={MenuIcon} alt="menu-icon" />
      </div>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={styles.cart}>
        <img src={ShoppingIcon} alt="" />
      </div>
      <ul className={menu ? styles.navOpen : styles.nav}>
        <li>
          <a href="#">Home Page</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
