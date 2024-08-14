import { Box, Typography } from "@mui/material";
import type { IReposResponse } from "../../../types/repo.types";
import { SortControls } from "./SortControls/SortControls";
import { SearchedItem } from "./SearchedItem";
import { useEffect } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { useLazyGetRepoByNameQuery } from "../../../redux/slices/getRepoByNameApi";
import { setSelectedRepo } from "../../../redux/slices/selectedRepoSlice";
import styles from "./search.module.sass";

export function SearchResult({
  data,
  isLoading,
}: {
  data?: IReposResponse;
  isLoading: boolean;
}) {
  const [trigger, { data: item, isLoading: isLoadingItem }] =
    useLazyGetRepoByNameQuery();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSelectedRepo({ item, isLoading: isLoadingItem }));
  }, [item, isLoadingItem]);

  return (
    <Box className={styles.searchResult}>
      <Typography variant="h3">Результаты поиска</Typography>
      {isLoading ? (
        <p>Loading...</p>
      ) : data?.items[0] ? (
        <>
          <SortControls />
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
