import React from "react";
import Header from "./Header";
import Container from "./UI/Container";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className={styles["contact-container"]}>
          <div className={styles["contact-heading"]}>
            <h1>Contact</h1>
          </div>
          <div className={styles.carDetail}>
            <div className={styles.left}>
              <div>
                <i class="fa-solid fa-phone"></i>
                <h3>9998887776</h3>
              </div>
              <div>
                <i class="fa-solid fa-envelope"></i>
                <h3>carX@gmail.com</h3>
              </div>
              <div>
                <i class="fa-solid fa-clock"></i>
                <h3>9:00 AM - 9:00PM</h3>
              </div>
              <div>
                <i class="fa-sharp fa-solid fa-location-dot"></i>
                <h3>UX Land, Hello World</h3>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles["line-1"]}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className={styles["line-2"]}>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Incidunt est, mollitia repellat laboriosam temporibus
                  asperiores vel. Ullam aliquid a porro aut reiciendis
                  laboriosam. Recusandae, accusantium laudantium iste
                  perferendis eos qui.
                </p>
              </div>
              <div className={styles["line-3"]}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  earum laboriosam sed. Ipsum, praesentium! Eum modi quae optio
                  quis nesciunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Contact;
