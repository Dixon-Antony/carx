import React from "react";
import styles from "./CarDetail.module.css";
import cars from "./data";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const CarDetail = () => {
  const [hoverState, setHoverState] = useState(false);
  const car = useLoaderData();

  const focusHandler = () => {
    setHoverState(true);
  };

  const leaveHandler = () => {
    setHoverState(false);
  };

  return (
    <React.Fragment>
      <div className={styles.carDetail}>
        <div className={styles.img}>
          <img src={car[0].img} alt="hello" />
        </div>
        <div className={styles.content}>
          <div className={styles["line-1"]}>
            <h1>{car[0].brand}</h1>
            <h1>{car[0].price}</h1>
          </div>
          <div className={styles["line-2"]}>
            <p>{car[0].model}</p>
            <br />
            <p className={styles.date}>
              <i className="fa-regular fa-calendar-days"></i> {car[0].make}
            </p>
            <br />
            <br />
            <p>Desc :</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
              necessitatibus! Fugit ut molestiae numquam, laborum laudantium
              ducimus atque eaque quae!
            </p>
            <br />
            <div>
              <a
                className={styles["btn"]}
                onMouseEnter={focusHandler}
                onMouseLeave={leaveHandler}
              >
                {hoverState ? "9998887776" : "Contact"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CarDetail;

export function loader({ request, params }) {
  let id = params.id;
  const car = cars.filter((car) => car.id === id);
  return car;
}
