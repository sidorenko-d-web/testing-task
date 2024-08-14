import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getRepoByName = createApi({
  reducerPath: "repo",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: (buider) => ({
    getRepoByName: buider.query({
      query: (full_name) => `/repos/${full_name}`,
    }),
  }),
});
export const { useLazyGetRepoByNameQuery, useGetRepoByNameQuery } = getRepoByName;
