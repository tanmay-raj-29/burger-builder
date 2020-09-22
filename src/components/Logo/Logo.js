import React from "react";
import burgerLogo from "../../assets/Images/burger-logo.png";
import styles from "./Logo.module.css";

const logo = (props) => (
  <div className={styles.Logo} style={{height: props.height}}>
    <img src={burgerLogo} alt="MyBurger logo" />
  </div>
);

export default logo;