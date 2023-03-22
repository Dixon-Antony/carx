import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <React.Fragment>
      <nav id="main-nav" className={styles["main-nav"]}>
        <div className={styles["logo"]}>
          <h2 onClick={navigateHandler}>Car-X</h2>
        </div>
        <ul>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/catalog">Help</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
