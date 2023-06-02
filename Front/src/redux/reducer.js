const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      return { ...state, myFavorites: payload, allCharacters: payload };

    case "REMOVE_FAV":
      return { ...state, myFavorites: payload };

    case "ORDER":
      return {
        ...state,
        myFavorites: state.allCharacters.sort((a, b) =>
          payload === "A" ? a.id - b.id : payload === "D" ? b.id - a.id : 0
        ),
      };

    case "FILTER":
      let copy3 = state.allCharacters.filter(
        ({ gender }) => gender === payload
      );
      return {
        ...state,
        myFavorites: copy3,
      };

    default:
      return state;
  }
};

export default rootReducer;
