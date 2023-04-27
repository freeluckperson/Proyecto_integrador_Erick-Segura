import React from "react";
import styles from "../Card/Card.module.css";
import { Link } from "react-router-dom";

function Card({ name, image, id, onClose }) {
  return (
    <div className={styles.container}>
      <button onClick={() => onClose(id)}>X</button>
      <div>
        <Link to={`/detail/${id}`}>
          <h2 style={{ color: "white" }}>{name}</h2>
        </Link>
        <hr />
        <img src={image} alt={name} />
      </div>
    </div>
  );
}

export default Card;
