import React from "react";
import Card from "../Card/Card.jsx";
import styles from "../Cards/Cards.module.css";

function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div className={styles.container}>
      {characters.map(({ name, species, gender, image, id }) => (
        <Card
          image={image}
          name={name}
          species={species}
          gender={gender}
          id = {id}
          onClose={onClose}
        />
      ))}
    </div>
  );
}

export default Cards;
