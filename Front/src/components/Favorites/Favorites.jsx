import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../redux/actions";

const Favorites = () => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(true);
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>

      {favorites.map(({ name, species, gender, image, id }) => (
        <Card
          image={image}
          name={name}
          species={species}
          gender={gender}
          id={id}
        />
      ))}
    </div>
  );
};

export default Favorites;
