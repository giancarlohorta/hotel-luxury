import React from "react";

import styles from "./Button.module.scss";

import { Link } from "react-router-dom";

const Button = ({ children }) => {
  return (
    <Link className={styles.button} to="/">
      {children}
    </Link>
  );
};

export default Button;
