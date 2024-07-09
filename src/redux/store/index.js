import { combineReducers, configureStore } from "@reduxjs/toolkit";
import selectCompanyReducer from "../reducers/selectCompanyReducer";
import searchReducer from "../reducers/searchReducer";

const rootReducer = combineReducers({
  favourites: selectCompanyReducer,
  searchReducer: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
