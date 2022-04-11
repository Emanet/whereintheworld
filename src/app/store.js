import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import filterReducer from "../features/filter/filterSlice";
export const store = configureStore({
  reducer: {
    update: searchReducer,
    filter: filterReducer,
  },
});
