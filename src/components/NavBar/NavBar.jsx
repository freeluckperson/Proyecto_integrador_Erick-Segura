import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <div className={styles.container}>
      <SearchBar onSearch={onSearch} />

      <Link to="/about">
        <button>About</button>
      </Link>

      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default NavBar;
