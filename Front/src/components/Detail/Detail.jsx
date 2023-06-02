import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "../Detail/Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        data.name ? setCharacter(data) : window.alert("No hay personajes con ese ID");
      }
    );
    return setCharacter({});
  }, [id]);

  const { name, status, species, gender, origin, image } = character;

  return (
    <div className={styles.container}>
      <div>
        <img src={image} alt={name} />
      </div>

      <div>
        <h4 style={{ fontSize: "3em" }}>{name}</h4>
        <h4>STATUS | {status}</h4>
        <h4>GENDER | {gender}</h4>
        <h4>SPECIES | {species}</h4>
        <h4>ORIGIN | {origin}</h4>
      </div>
    </div>
  );
};

export default Detail;
