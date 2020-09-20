import React from "react";
import stlyes from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li className={stlyes.NavigationItem}>
    <a className={props.active?stlyes.active:null} href={props.link}>{props.children}</a>
  </li>
);

export default navigationItem;
