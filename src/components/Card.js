import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-img"]}>
        <img src={props.img} alt="Car" />
      </div>
      <div className={styles["card-content-1"]}>
        <h2>
          {props.brand} &nbsp;<span>{props.model}</span>
        </h2>
        <h2>{props.price}</h2>
      </div>
      <div className={styles["card-content-2"]}>
        <h3>{props.make}</h3>
        <h3>{props.kms}</h3>
        <h3>{props.transmission}</h3>
      </div>
      <div className={styles["card-content-3"]}>
        <Link to="" className={styles["card-btn"]}>
          View
        </Link>
      </div>
    </div>
  );
};

export default Card;
