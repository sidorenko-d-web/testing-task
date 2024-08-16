import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IRepoItem } from "../../types/api.types";

//создание эндпоинта до github
export const getRepoByName = createApi({
  reducerPath: "repo",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: (buider) => ({
    getRepoByName: buider.query<IRepoItem, string>({
      query: (full_name) => `/repos/${full_name}`,
    }),
  }),
});
export const { useLazyGetRepoByNameQuery, useGetRepoByNameQuery } =
  getRepoByName;
