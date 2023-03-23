import React from "react";
import styles from "./FurtherDetail.module.css";

const FurtherDetail = (props) => {
  return (
    <div className={styles["further-container"]}>
      <h1>Specification</h1>
      <div className={styles["further-details"]}>
        <div>
          <h4>Brand</h4>
          <h2>{props.details[0].brand}</h2>
        </div>
        <div>
          <h4>Model</h4>
          <h2>{props.details[0].model}</h2>
        </div>

        <div>
          <h4>Engine</h4>
          <h2>{props.details[0].engine}</h2>
        </div>
        <div>
          <h4>Kms</h4>
          <h2>{props.details[0].kms}</h2>
        </div>

        <div>
          <h4>Type</h4>
          <h2>{props.details[0].type}</h2>
        </div>
        <div>
          <h4>Make</h4>
          <h2>{props.details[0].make}</h2>
        </div>
        <div>
          <h4>Color</h4>
          <h2>{props.details[0].color}</h2>
        </div>

        <div>
          <h4>Variant</h4>
          <h2>{props.details[0].variant}</h2>
        </div>

        <div>
          <h4>Transmission</h4>
          <h2>{props.details[0].transmission}</h2>
        </div>

        <div>
          <h4>GearBox</h4>
          <h2>{props.details[0].gearBox}</h2>
        </div>
      </div>
    </div>
  );
};

export default FurtherDetail;
