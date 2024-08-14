import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  IReposQuery,
  IReposResponse,
  IReposSortQuery,
} from "../../types/repo.types";

export const searchReposApi = createApi({
  reducerPath: "search",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: (buider) => ({
    searchRepos: buider.query<
      IReposResponse,
      { query: IReposQuery; sort: IReposSortQuery }
    >({
      query: ({ query, sort }) => {
        let sortTransfer: string = "";
        switch (sort?.sort) {
          case "Название":
            sortTransfer = "";
            break;
          case "Число форков":
            sortTransfer = "forks";
            break;
          case "Число звезд":
            sortTransfer = "stars";
            break;
          case "Дата обновления":
            sortTransfer = "updated";
            break;
        }
        return `/search/repositories?${new URLSearchParams(query)}&${
          sort &&
          new URLSearchParams({ sort: sortTransfer, order: sort.order! })
        }`;
      },
    }),
  }),
});
export const { useSearchReposQuery } = searchReposApi;
