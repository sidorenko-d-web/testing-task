import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { IReposQuery } from "../../types/api.types";

const initialState: {request: IReposQuery} = {
  request: {
    q: "",
    page: "1",
    per_page: "10",
  },
};

//слайс, который хранит в себе параметры запросa: 
//поисковую строку, текущую страницу и кол-во элементов на страницу
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
