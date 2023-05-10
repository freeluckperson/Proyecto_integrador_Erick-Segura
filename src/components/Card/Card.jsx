import React, { useState, useEffect } from "react";
import styles from "../Card/Card.module.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

const Card = ({ name, image, id, onClose, addFav, removeFav, myFavorites }) => {
  
  const [isFav, setIsFav] = useState(false);
  
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ name, image, id, onClose, addFav, removeFav, myFavorites });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.container}>
      <div className={styles.butonContainer}>
        <div>
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
        </div>

        <div>
          <button onClick={() => onClose(id)}>X</button>
        </div>
      </div>

      <div>
        <Link to={`/detail/${id}`}>
          <h2 style={{ color: "white" }}>{name}</h2>
        </Link>
        <hr />
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
