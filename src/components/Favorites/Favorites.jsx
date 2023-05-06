import { useSelector } from "react-redux";
import Card from "../Card/Card";

function Favorites() {
  const favorites = useSelector((state) => state.myFavorites);
  return (
    <div>
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
}

export default Favorites;
