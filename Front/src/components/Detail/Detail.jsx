import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "../Detail/Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  const { name, status, species, gender, origin, image } = character;

  return (
    <div className={styles.container}>

      <div >
        <img src={image} alt={name} />
      </div>

      <div >
        <h4 style={{ fontSize: "3em" }}>{name}</h4>
        <h4>STATUS | {status}</h4>
        <h4>GENDER | {gender}</h4>
        <h4>SPECIES | {species}</h4>
        {origin && <h4>ORIGIN | {origin.name}</h4>}
      </div>
    </div>
  );
};

export default Detail;
