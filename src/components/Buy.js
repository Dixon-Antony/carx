import React from "react";
import Modal from "./UI/Modal";
import styles from "./Buy.module.css";
import { changeStatus } from "./data";

const Buy = (props) => {
  const buyCar = (e) => {
    e.preventDefault();
    changeStatus(props.data[0].id);
    props.hideCart();
  };

  return (
    <Modal hideCart={props.hideCart}>
      <div className={styles["cartContainer"]}>
        <div className={styles.img}>
          <img src={props.data[0].img1} alt="hello" />
        </div>
        <div className={styles.content}>
          <div className={styles["line-1"]}>
            <h2>{props.data[0].brand}</h2>
            <h2>{props.data[0].price}</h2>
          </div>
          <div className={styles["line-2"]}>
            <p>{props.data[0].model}</p>
            <br />
            <p className={styles.date}>{props.data[0].make}</p>
            <div className={styles["btn-group"]}>
              <button
                onClick={props.hideCart}
                className={`${styles["btn"]} ${styles["btn1"]}`}
              >
                Close
              </button>
              {props.data[0].sold == "unsold" && (
                <button
                  onClick={buyCar}
                  className={`${styles["btn"]} ${styles["btn2"]}`}
                >
                  Buy
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Buy;
