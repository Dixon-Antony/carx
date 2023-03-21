import React from "react";
import styles from "./Catalog.module.css";
import Card from "./Card";
import cars from "./data";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import Container from "./UI/Container";

const Catalog = () => {
  const cars = useLoaderData();

  return (
    <React.Fragment>
      <Header />
      <Container>
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
      </Container>
    </React.Fragment>
  );
};

export default Catalog;

export function loader() {
  return cars;
}
