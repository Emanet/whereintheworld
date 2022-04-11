import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { update } = searchSlice.actions;
export default searchSlice.reducer;
