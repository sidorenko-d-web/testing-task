import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { IReposSortQuery } from "../../types/repo.types";

const initialState: IReposSortQuery = {};

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
