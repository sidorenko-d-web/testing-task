import { Box } from "@mui/material";
import { SortButton } from "./SortButton";
import styles from "./sort.module.sass";

const columns = [
  "Название",
  "Язык",
  "Число форков",
  "Число звезд",
  "Дата обновления",
];

export function SortControls() {
  return (
    <Box className={styles.sortControls}>
      {columns.map((col) => (
        <SortButton key={col} value={col} isButton={col !== "Язык"} />
      ))}
    </Box>
  );
}
