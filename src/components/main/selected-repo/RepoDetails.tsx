import { Box, Typography } from "@mui/material";
import { IRepoItem } from "../../../types/repo.types";
import styles from "./selected-repo.module.sass";
import { Star } from "@mui/icons-material";

export function RepoDetails({ item }: { item: IRepoItem }) {
  return (
    <Box className={styles.details}>
      <Typography component="h3">{item.name}</Typography>
      <Box className={styles.line}>
        <Typography component="p" className={styles.language}>{item.language}</Typography>
        <Typography component="p"> <Star sx={{fill:' #ffb400'}}/>{item.stargazers_count}</Typography>
      </Box>
      <Typography component="p">{item.description}</Typography>
      <Typography component="p">
        {item.license ? item.license.name : "Лицензия не предоставлена"}
      </Typography>
    </Box>
  );
}