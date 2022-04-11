import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filter: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { filter } = filterSlice.actions;
export default filterSlice.reducer;
