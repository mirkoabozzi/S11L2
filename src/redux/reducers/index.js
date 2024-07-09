const initalState = {
  favourites: {
    content: [],
  },
};

const mainReducer = (state = initalState, action) => {
  switch (action.type) {
    case "SELECT_COMPANY":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };

    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((company) => company._id !== action.payload),
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
