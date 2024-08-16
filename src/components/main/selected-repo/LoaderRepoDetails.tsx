import { Box } from "@mui/material";
import styles from './selected-repo.module.sass'

export function LoaderRepoDetails() {
  return (
    <Box className={styles.loader}>
      <div className={styles.loaderHeadline}></div>
      <div className={styles.line}>
        <div className={styles.language}></div>
        <div className={styles.stars}></div>
      </div>
      <div className={styles.desc}></div> 
      <div className={styles.desc}></div> 
      <div className={styles.desc}></div> 
    </Box>
  )
}
 