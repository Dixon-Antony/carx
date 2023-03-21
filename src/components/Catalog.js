import React from "react";
import styles from "./Catalog.module.css";
import Card from "./Card";

const Catalog = (props) => {
  return (
    <div className={styles["card-items"]}>
      {props.cars.map((car) => (
        <Card
          key={car.id}
          id={car.id}
          brand={car.brand}
          model={car.model}
          price={car.price}
          kms={car.kms}
          make={car.make}
          variant={car.variant}
          transmission={car.transmission}
          img={car.img}
        />
      ))}
    </div>
  );
};

export default Catalog;
