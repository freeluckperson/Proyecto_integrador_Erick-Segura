import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharactersFav, payload],
        allCharactersFav: [...state.allCharactersFav, payload],
      };

    case REMOVE_FAV:
      const fav = (fav) => fav.id !== payload;
      return {
        ...state,
        myFavorites: state.myFavorites.filter(fav),
      };

    case FILTER:
      const gender = ({ gender }) => gender === payload;
      return {
        ...state,
        myFavorites: state.allCharactersFav.filter(gender),
      };

    case ORDER:
      const copy = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? copy.sort((a, b) => a.id - b.id)
            : copy.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
