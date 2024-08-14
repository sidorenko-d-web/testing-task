import { Box, Typography } from "@mui/material";
import { useSearchReposQuery } from "../../redux/slices/searchReposApi";
import type { IReposQuery } from "../../types/repo.types";
import { SearchResult } from "./search-result/SearchResult";
import styles from "./main.module.sass";
import { useAppSelector } from "../../redux/hooks";
import { SelectedRepo } from "./selected-repo/SelectedRepo";
import { PageControls } from "./page-controls/PageControls";

export function Main() {
  const requestString = useAppSelector((state) => state.requestStringSlice);

  const query: IReposQuery = {
    q: requestString.string,
    per_page: "10",
    page: "1",
  };

  let sort = useAppSelector((state) => state.sortSlice);

  const { data, isLoading } = useSearchReposQuery({ query, sort });

  return (
    <Box className={styles.main}>
      {!data && !isLoading ? (
        <Typography variant="h4" className={styles.enter}>
          Добро пожаловать
        </Typography>
      ) : (
        <>
          <Box className={styles.app}>
            <SearchResult data={data} isLoading={isLoading} />
            <PageControls />
          </Box>
          <SelectedRepo />
        </>
      )}
    </Box>
  );
}
