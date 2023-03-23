import React from "react";
import { useLoaderData } from "react-router-dom";
import styles from "./Gallery.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import cars from "./data";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Gallery = () => {
  const images = useLoaderData();
  const params = useParams();

  return (
    <React.Fragment>
      <Header />
      <div className={styles["slideshow-container"]}>
        <div className={styles["btn"]}>
          <Link to={`/carx/catalog/${params.id}`}>
            <button type="submit">
              <i className="fa-solid fa-x"></i>
            </button>
          </Link>
        </div>
        <Slide>
          <div className={styles["each-slide-effect"]}>
            <div>
              <img src={images[0]} alt="" />
            </div>
          </div>
          <div className={styles["each-slide-effect"]}>
            <div>
              <img src={images[1]} alt="" />
            </div>
          </div>
          <div className={styles["each-slide-effect"]}>
            <div>
              <img src={images[2]} alt="" />
            </div>
          </div>
        </Slide>
      </div>
    </React.Fragment>
  );
};

export default Gallery;

export function loader({ request, params }) {
  const id = params.id;

  const car = cars.filter((car) => car.id === id);

  let images = [];
  images.push(car[0].img1);
  images.push(car[0].img2);
  images.push(car[0].img3);

  return images;
}
