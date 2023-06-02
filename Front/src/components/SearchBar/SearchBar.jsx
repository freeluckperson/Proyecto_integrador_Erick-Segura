import React, { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setId(value);
  };

  const handleSearch = () => {
    onSearch(id);
    setId("");
  };

  return (
    <div className={styles.container}>
      <input type="search" name="search" id="search" value={id} onChange={handleChange} />
      <button onClick={handleSearch}>Agregar</button>
    </div>
  );
}
