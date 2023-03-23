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
                <i className="fa-solid fa-phone"></i>
                <h3>9998887776</h3>
              </div>
              <div>
                <i className="fa-solid fa-envelope"></i>
                <h3>carX@gmail.com</h3>
              </div>
              <div>
                <i className="fa-solid fa-clock"></i>
                <h3>9:00 AM - 9:00PM</h3>
              </div>
              <div>
                <i className="fa-sharp fa-solid fa-location-dot"></i>
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
          <div className={styles["map"]}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612859.537178621!2d8.008100839466906!3d50.24299168073519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799da80f9e76845%3A0x187a543ed0b6bbea!2sPorsche%20Zentrum%20Stuttgart!5e0!3m2!1sen!2sin!4v1679460705236!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Contact;
