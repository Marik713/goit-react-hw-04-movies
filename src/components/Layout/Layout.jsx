import React from "react";
import PropTypes from "prop-types";
import Appbar from "../Appbar/Appbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Appbar />
        {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
