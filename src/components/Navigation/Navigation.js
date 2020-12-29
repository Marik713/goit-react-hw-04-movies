import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from './Navigation.module.css'

const Navigation = () => (
  <ul className={styles.NavPage}>
    <li>
      <NavLink
        exact
        to={routes[0].path}
        className={styles.NavigationLink}
        activeClassName={styles.NavigationLinkActive}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={routes[1].path}
        className={styles.NavigationLink}
        activeClassName={styles.NavigationLinkActive}
      >
        Movie
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
