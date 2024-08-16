import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { TypeReposSortQuery } from "../../types/api.types";

const initialState: TypeReposSortQuery = {
  order: 'desc'
};

//слайс, который хранит текущие параметры сортировки
export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.order = action.payload.order;
      state.sort = action.payload.sort;
    },
  },
});

export const { setSort } = sortSlice.actions;
export const selectSort = (state: RootState) => state.sortSlice;
export default sortSlice.reducer;
