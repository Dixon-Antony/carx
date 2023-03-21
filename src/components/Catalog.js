import React, { useEffect, useState, useRef } from "react";
import styles from "./Catalog.module.css";
import Card from "./Card";
import cars from "./data";
import { useLoaderData, useLocation } from "react-router-dom";
import Header from "./Header";
import Container from "./UI/Container";

const Catalog = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  let carsData = useLoaderData();

  const [search, setSearch] = useState("");
  let [cars, setCars] = useState(carsData);

  const inputHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setCars(carsData);
    console.log("clicked");
    cars = cars.filter((car) => {
      let newCars = [];
      for (let value of Object.values(car)) {
        newCars.push(value.toLowerCase());
      }

      for (let value of newCars) {
        if (value.includes(search)) {
          return car;
        }
        setCars(cars);
      }
    });
    console.log(cars);
  };

  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className={styles["input-group"]}>
          <input
            type="text"
            className={styles["input"]}
            id="search"
            name="search"
            placeholder="type.."
            autoComplete="off"
            value={search}
            onChange={inputHandler}
          />
          <input
            className={styles["button--submit"]}
            value="Search"
            type="submit"
            onClick={searchHandler}
          />
        </div>
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
              img={car.img1}
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
