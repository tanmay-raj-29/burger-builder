import React from "react";
import styles from "./DrawerToogler.module.css";

const drawerToogle= props => (
    <div className={styles.DrawerToggle}  onClick={props.clicked}>   
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drawerToogle;