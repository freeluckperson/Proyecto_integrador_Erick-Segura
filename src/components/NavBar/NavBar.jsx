import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "../NavBar/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  
  const lineStyle = {
    borderRadius: "15%",
    backgroundColor: "green",
    padding: "15%",
  };

  return (
    <div className={styles.container}>
      <SearchBar onSearch={onSearch} />

      <Link to="/about">
        <button style={lineStyle}>About</button>
      </Link>

      <Link to="/home">
        <button style={lineStyle}>Home</button>
      </Link>
    </div>
  );
};

export default NavBar;
