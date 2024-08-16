import { configureStore } from "@reduxjs/toolkit";
import { searchReposApi } from "./slices/searchRepos.api";
import sortReducer from "./slices/sortSlice";
import requestStringReducer from "./slices/requestStringSlice";
import selectedRepoReducer from "./slices/selectedRepoSlice";
import { getRepoByName } from "./slices/getRepoByName.api";

export const store = configureStore({
  reducer: {
    sortSlice: sortReducer,
    requestStringSlice: requestStringReducer,
    selectedRepoSlice: selectedRepoReducer,
    [searchReposApi.reducerPath]: searchReposApi.reducer,
    [getRepoByName.reducerPath]: getRepoByName.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      searchReposApi.middleware,
      getRepoByName.middleware,
    ]),
});

//сгененрированные типы для redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
