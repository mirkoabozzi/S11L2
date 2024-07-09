const initialState = {
  content: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOB":
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
