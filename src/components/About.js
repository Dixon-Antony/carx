import React from "react";
import styles from "./About.module.css";
import Header from "./Header";
import Container from "./UI/Container";

const About = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className={styles["about-container"]}>
          <div className={styles["about-heading"]}>
            <h1>About Us</h1>
          </div>
          <div className={styles.about}>
            <div className={styles["section"]}>
              <div className={styles["left"]}>
                <div className={styles["icon"]}>
                  <i class="fa-solid fa-wrench fa-8x"></i>
                </div>
              </div>
              <div className={styles["right"]}>
                <h1>1M+ Certified Cars</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis voluptatum deleniti fugit officia illo vero optio
                  praesentium nobis itaque reprehenderit.
                </p>
              </div>
            </div>
            <div className={styles["section"]}>
              <div className={styles["left"]}>
                <h1>5L+ Happy Customers</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Architecto placeat dicta cum harum eum nesciunt labore
                  corporis vitae hic ipsa?
                </p>
              </div>
              <div className={styles["right"]}>
                <div className={styles["icon"]}>
                  <i class="fa-solid fa-user-astronaut fa-8x"></i>
                </div>
              </div>
            </div>
            <div className={styles["section"]}>
              <div className={styles["left"]}>
                <div className={styles["icon"]}>
                  <i class="fa-solid fa-headset fa-8x"></i>
                </div>
              </div>
              <div className={styles["right"]}>
                <h1>1L+ Daily Visits</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores facilis itaque neque voluptate. Sequi, nisi libero
                  voluptatibus quibusdam eum dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default About;
