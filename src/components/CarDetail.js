import React from "react";
import styles from "./CarDetail.module.css";
import cars from "./data";
import { useLoaderData, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Container from "./UI/Container";
import FurtherDetail from "../components/FurtherDetail";
import { Link } from "react-router-dom";

const CarDetail = () => {
  const [hoverState, setHoverState] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  const car = useLoaderData();

  const focusHandler = () => {
    setHoverState(true);
  };

  const leaveHandler = () => {
    setHoverState(false);
  };

  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className={styles.detailContainer}>
          <div className={styles.carDetail}>
            <div className={styles.img}>
              <Link to={`/gallery/${car[0].id}`} className={styles["card-btn"]}>
                <img src={car[0].img1} alt="hello" />
              </Link>
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
                  <button
                    className={styles["btn"]}
                    onMouseEnter={focusHandler}
                    onMouseLeave={leaveHandler}
                  >
                    {hoverState ? "9998887776" : "Contact"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <FurtherDetail details={car} />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default CarDetail;

export function loader({ request, params }) {
  let id = params.id;
  const car = cars.filter((car) => car.id === id);
  return car;
}
