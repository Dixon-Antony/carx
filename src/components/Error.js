import React from "react";
import Header from "./Header";
import Container from "./UI/Container";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className={styles["error-page"]}>
          <h2>Page Not Available</h2>
          <p>Please navigate to an available page.</p>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Error;
