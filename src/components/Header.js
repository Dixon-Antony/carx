import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
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
            <NavLink
              to="/catalog"
              style={({ isActive }) => ({
                borderColor: isActive ? "blueviolet" : undefined,
              })}
            >
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                borderColor: isActive ? "blueviolet" : undefined,
              })}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                borderColor: isActive ? "blueviolet" : undefined,
              })}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
