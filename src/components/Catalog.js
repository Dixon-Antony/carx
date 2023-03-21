import React from "react";
import styles from "./Catalog.module.css";
import Card from "./Card";
import cars from "./data";
import { useLoaderData } from "react-router-dom";

const Catalog = () => {
  const cars = useLoaderData();

  return (
    <div className={styles["card-items"]}>
      {cars.map((car) => (
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

export function loader() {
  return cars;
}
