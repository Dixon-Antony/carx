import React, { useEffect } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ myCars, setSearch }) => {
  const inputHandler = (e) => {
    if (!e.target.value) {
      return setSearch(myCars);
    }

    let resultsArray = myCars.filter((car) => {
      for (let i of Object.values(car)) {
        if (i.toLowerCase().includes(e.target.value.toLowerCase())) {
          return car;
        }
      }
    });
    setSearch(resultsArray);
  };

  const searchHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles["input-group"]}>
      <input
        type="text"
        className={styles["input"]}
        id="search"
        name="search"
        placeholder="type.."
        autoComplete="off"
        onChange={inputHandler}
      />
    </div>
  );
};

export default SearchBar;
