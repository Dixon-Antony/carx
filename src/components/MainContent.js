import React from "react";
import styles from "./MainContent.module.css";
import Button from "./UI/Button";
import { Link } from "react-router-dom";

const MainContent = (props) => {
  return (
    <div className={styles["main-content"]}>
      <div className={styles["main-heading"]}>
        <h1>Welcome to Car-X</h1>
      </div>
      <Link to="/catalog">
        <Button type="sumbit" content="View Catalog" />
      </Link>
    </div>
  );
};

export default MainContent;
