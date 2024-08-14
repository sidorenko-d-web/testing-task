import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  request: {
    q: "",
    page: "1",
    per_page: "10",
  },
};

export const requestStringSlice = createSlice({
  name: "string",
  initialState,
  reducers: {
    setRequestString: (state, action) => {
      state.request = { ...state.request, ...action.payload };
    },
  },
});

export const { setRequestString } = requestStringSlice.actions;
export const selectRequestString = (state: RootState) =>
  state.requestStringSlice;
export default requestStringSlice.reducer;
