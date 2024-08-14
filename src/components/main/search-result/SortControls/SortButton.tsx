import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import { setSort } from "../../../../redux/slices/sortSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import styles from "./sort.module.sass";

export type TypeSort = "asc" | "desc" | null;

export function SortButton({
  value,
  isButton,
}: {
  value: string;
  isButton: boolean;
}) {
  const [orderValue, setOrderValue] = useState<TypeSort>(null);
  let sort = useAppSelector((state) => state.sortSlice);
  const dispatch = useAppDispatch();

  const handleSort = () => {
    if (orderValue !== "desc") {
      setOrderValue("desc");
      dispatch(setSort({ order: "desc", sort: value}));
    } else {
      setOrderValue("asc");
      dispatch(setSort({ order: "asc", sort: value}));
    }
  };

  return (
    <Button
      onClick={handleSort}
      endIcon={
        //я поместил стрелочку в конец столбца, чтобы избежать дергающейся кнопки.
        orderValue && value === sort.sort ? (
          orderValue === "asc" ? (
            <ArrowUpward color="action" />
          ) : (
            <ArrowDownward color="action" />
          )
        ) : (
          <ArrowDownward sx={{ fill: "transparent" }} />
        )
      }
      disabled={!isButton}
      className={styles.sortButton}
      sx={{
        padding: 0,
        transition: "all .3s",
        textOverflow: 'ellipsis',
        ":hover": { background: "#f2f2f2" },
      }}
    >
      {value}
    </Button>
  );
}
