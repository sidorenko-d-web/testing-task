import { Box, Typography } from "@mui/material";
import { useSearchReposQuery } from "../../redux/slices/searchReposApi";
import { SearchResult } from "./search-result/SearchResult";
import styles from "./main.module.sass";
import { useAppSelector } from "../../redux/hooks";
import { SelectedRepo } from "./selected-repo/SelectedRepo";
import { PageControls } from "./page-controls/PageControls";

export function Main() {
  const { request } = useAppSelector((state) => state.requestStringSlice);

  let sort = useAppSelector((state) => state.sortSlice);

  const { data, isLoading } = useSearchReposQuery({ query: request, sort });

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
            {data?.total_count && <PageControls count={data?.total_count} />}
          </Box>
          <SelectedRepo />
        </>
      )}
    </Box>
  );
}
