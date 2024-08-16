import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { IRepoItem } from "../../types/api.types";

const initialState: {
  item: IRepoItem | null;
  isFetching: boolean;
  error: { status: number; message: string } | null;
} = {
  item: null,
  isFetching: false,
  error: null
};

//эндпоинт на запрос определенного репозитория
export const selectedRepoSlice = createSlice({
  name: "selected-repo",
  initialState,
  reducers: {
    setSelectedRepo: (state, action) => {
      state.item = action.payload.item;
      state.isFetching = action.payload.isFetching;
      state.error = action.payload.error;
    },
  },
});

export const { setSelectedRepo } = selectedRepoSlice.actions;
export const selectSelectedRepoSlice = (state: RootState) =>
  state.selectedRepoSlice;
export default selectedRepoSlice.reducer;
