import { Box, Typography } from "@mui/material";
import type { IRepoItem } from "../../../types/api.types";
import styles from "./selected-repo.module.sass";
import { Star } from "@mui/icons-material";

interface IRepoDetailsProps { item: IRepoItem }

export function RepoDetails({ item }: IRepoDetailsProps ) {
  return (
    <Box className={styles.details}>
      <Typography component="h3">{item.name || 'Нет названия'}</Typography>
      <Box className={styles.line}>
        <Typography component="p" className={styles.language}>{item.language || 'Нет языка'}</Typography>
        <Typography component="p"> <Star sx={{ fill: ' #ffb400' }} />{item.stargazers_count}</Typography>
      </Box>
      <Typography component="p">{item.description || 'Нет описания'}</Typography>
      <Typography component="p">
        {item.license ? item.license.name : "Лицензия не предоставлена"}
      </Typography>
    </Box>
  );
}