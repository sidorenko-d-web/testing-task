import { Box, Typography } from "@mui/material";
import styles from "./selected-repo.module.sass";
import { useAppSelector } from "../../../redux/hooks";
import { RepoDetails } from "./RepoDetails";

export function SelectedRepo() {
  const { item, isLoading } = useAppSelector(
    (state) => state.selectedRepoSlice
  );

  return item ? (
    <RepoDetails item={item} />
  ) : isLoading ? (
    <p>Loading</p>
  ) : (
    <Box className={styles.noSelectedRepo}>
      <Typography component="p">Выберите репозиторий</Typography>
    </Box>
  );
}
