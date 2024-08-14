import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { IRepoItem } from "../../types/repo.types";

const initialState: { item: IRepoItem | null; isLoading: boolean } = {
  item: null,
  isLoading: false,
};

export const selectedRepoSlice = createSlice({
  name: "selected-repo",
  initialState,
  reducers: {
    setSelectedRepo: (state, action) => {
      state.item = action.payload.item;
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const { setSelectedRepo } = selectedRepoSlice.actions;
export const selectSelectedRepoSlice = (state: RootState) =>
  state.selectedRepoSlice;
export default selectedRepoSlice.reducer;
