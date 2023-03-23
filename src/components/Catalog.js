import React, { useEffect, useState } from "react";
import styles from "./Catalog.module.css";
import Card from "./Card";
import cars from "./data";
import { useLoaderData, useLocation } from "react-router-dom";
import Header from "./Header";
import Container from "./UI/Container";
import SearchBar from "./SearchBar";

const Catalog = () => {
  const location = useLocation();
  const carsData = useLoaderData();
  const [search, setSearch] = useState([]);
  const [myCars, setMyCars] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  useEffect(() => {
    setMyCars(carsData);
    setSearch(carsData);
  }, [carsData]);

  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className={styles["catalog-container"]}>
          <SearchBar myCars={myCars} setSearch={setSearch} />
          <div className={styles["card-items"]}>
            {search.map((car) => (
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
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Catalog;

export function loader() {
  return cars;
}
