import React from "react";
import styles from "./CarDetail.module.css";
import { Link, useParams } from "react-router-dom";

const CarDetail = (props) => {
  const params = useParams();
  let id = params.id;

  return <h1 className={styles.heading}>{id}</h1>;
};

export default CarDetail;
