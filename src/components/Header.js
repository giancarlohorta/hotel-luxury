import React from "react";
import styles from "./Header.module.scss";

import { ReactComponent as Logo } from "../assets/logo.svg";

import { NavLink } from "react-router-dom";

const Header = () => {
  const activeNav = {
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  };
  return (
    <header className={`${styles.header} container`}>
      <NavLink className={styles.header__container_logo} to="/">
        <Logo className={styles.logo} />
      </NavLink>
      <nav className={styles.header__nav}>
        <NavLink
          className={styles.header__nav_element}
          to="/"
          and
          activeStyle={activeNav}
        >
          Home
        </NavLink>
        <NavLink
          className={styles.header__nav_element}
          to="facilities"
          activeStyle={activeNav}
        >
          Facilities
        </NavLink>
        <NavLink
          className={styles.header__nav_element}
          to="rooms"
          activeStyle={activeNav}
        >
          Rooms
        </NavLink>
        <NavLink
          className={styles.header__nav_element}
          to="contactus"
          activeStyle={activeNav}
        >
          Contact-us
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
