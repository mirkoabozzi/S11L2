const initialState = {
  content: [],
  isLoading: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOB":
      return {
        ...state,
        content: action.payload,
      };
    case "GET_JOB_LOADING_ON":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_JOB_LOADING_OFF":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default searchReducer;
