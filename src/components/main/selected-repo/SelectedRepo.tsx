import { Box, Typography } from "@mui/material";
import styles from "./selected-repo.module.sass";
import { useAppSelector } from "../../../redux/hooks";
import { RepoDetails } from "./RepoDetails";
import { LoaderRepoDetails } from "./LoaderRepoDetails";

export function SelectedRepo() {

  const { item, isFetching, error } = useAppSelector(
    (state) => state.selectedRepoSlice
  );

  if(error) return ( // вернуть код ошибки, если возникла ошибка
    <Box className={styles.noSelectedRepo}>
      <Typography component="p">error {error.status} {error.message}</Typography>
    </Box>)

  return isFetching ?
    <LoaderRepoDetails /> :
    item ?
      <RepoDetails item={item} /> :
      <Box className={styles.noSelectedRepo}>
        <Typography component="p">Выберите репозиторий</Typography>
      </Box>

}
