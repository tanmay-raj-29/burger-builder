import React from "react";
import stlyes from "./NavigationItem.module.css";
import {NavLink} from "react-router-dom";

const navigationItem = (props) => (
  <li className={stlyes.NavigationItem}>
    <NavLink activeClassName={stlyes.active} exact={props.exact} to={props.link}>{props.children}</NavLink>
  </li>
);

export default navigationItem;
