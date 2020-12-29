import React from "react";
import LoaderSpinner from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => (
  <div className={styles.loader}>
    <LoaderSpinner type="ThreeDots" color="grey" height={100} width={100} />
  </div>
);

export default Loader;
