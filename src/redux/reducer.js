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
      return {
        ...state,
        myFavorites: state.myFavorites.filter(({ id }) => id !== payload),
      };
    case FILTER:
      return {
        ...state,
        myFavorites: [
          ...state.allCharactersFav,
          state.allCharactersFav.filter(({ gender }) => gender === payload),
        ],
      };
    case ORDER:
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? state.myFavorites.sort((a, b) => a.id - b.id)
            : state.myFavorites.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
