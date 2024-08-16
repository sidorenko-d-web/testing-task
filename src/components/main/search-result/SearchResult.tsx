import { Box, Typography } from "@mui/material";
import type { IReposResponse } from "../../../types/api.types";
import { SortControls } from "./SortControls/SortControls";
import { SearchedItem } from "./SearchedItem";
import { useEffect } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { useLazyGetRepoByNameQuery } from "../../../redux/slices/getRepoByName.api";
import { setSelectedRepo } from "../../../redux/slices/selectedRepoSlice";
import styles from "./search.module.sass";
import { SearchLoader } from "./SearchLoader";

interface ISearchResultProps {
  data?: IReposResponse;
  isFetching: boolean;
}

export function SearchResult({ data, isFetching }: ISearchResultProps) {
  const [trigger, { data: item, isFetching: isFetchingItem, error }] =
    useLazyGetRepoByNameQuery();

  const dispatch = useAppDispatch();

  // синхронизация подгрузки деталей репозитория и состояния в redux
  useEffect(() => {
    dispatch(setSelectedRepo({ item, isFetching: isFetchingItem, error }));
  }, [item, isFetchingItem]);

  return (
    <Box className={styles.searchResult}>
      <Typography variant="h3">Результаты поиска</Typography>
      <SortControls />
      {isFetching ? (
        Array(10).fill(0).map((_, i) => <SearchLoader key={i} />)
      ) : data?.items[0] ? (
        <>
          {data.items.map((item) => (
            <SearchedItem key={item.full_name} item={item} trigger={trigger} />
          ))}
        </>
      ) : (
        <Typography component="h4">Таких репозиториев нет</Typography>
      )}
    </Box>
  );
}
