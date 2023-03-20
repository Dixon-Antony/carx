import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <React.Fragment>
      <nav id="main-nav" className={styles["main-nav"]}>
        <div className={styles["logo"]}>
          <h2>Car-X</h2>
        </div>
        <ul>
          <li>
            <a href="/catalog">Catalog</a>
          </li>
          <li>
            <a href="search">Search</a>
          </li>
          <li>
            <a href="profile">Profile</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
