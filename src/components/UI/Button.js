import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={styles.btn}>
      <button type={props.type}>{props.content}</button>
    </div>
  );
};

export default Button;
