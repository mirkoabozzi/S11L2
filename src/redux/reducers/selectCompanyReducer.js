import { REMOVE_FAVOURITE, SELECT_COMPANY } from "../actions";

const initalState = {
  content: [],
};

const selectCompanyReducer = (state = initalState, action) => {
  switch (action.type) {
    case SELECT_COMPANY:
      return {
        ...state,
        content: [...state.content, action.payload],
      };

    case REMOVE_FAVOURITE:
      return {
        ...state,
        content: state.content.filter((company) => company._id !== action.payload),
      };

    default:
      return state;
  }
};

export default selectCompanyReducer;
