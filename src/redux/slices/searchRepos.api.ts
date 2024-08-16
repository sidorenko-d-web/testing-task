import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  IReposQuery,
  IReposResponse,
  TypeReposSortQuery,
} from "../../types/api.types";

//создание эндпоинта, для поиска по репозиториям
export const searchReposApi = createApi({
  reducerPath: "search",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: (buider) => ({
    searchRepos: buider.query<IReposResponse, { query: IReposQuery; sort: TypeReposSortQuery }>({
      query: ({ query, sort }) => {
        return getReposByQuery(sort, query);
      },
    }),
  }),
});

export const { useSearchReposQuery } = searchReposApi;

function getReposByQuery(sort: TypeReposSortQuery, query: IReposQuery) {
  //перевод варианта сортировки, из приложения в вариант для api
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
    new URLSearchParams({
      sort: sortTransfer,
      order: sort.order,
    })
  }`;
}
