import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import { setSort } from "../../../../redux/slices/sortSlice";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import styles from "./sort.module.sass";
import type { TypeOrder } from "../../../../types/api.types";

interface ISortButtonProps {
  value: string;
  isButton: boolean;
}

export function SortButton({ value, isButton }: ISortButtonProps) {
  const [orderValue, setOrderValue] = useState<TypeOrder>('desc');
  let sort = useAppSelector((state) => state.sortSlice);
  const dispatch = useAppDispatch();


  //определяет и то, где и как должна быть нарисована стрелка, и определяет значение для запросa
  const handleSort = () => {
    if (orderValue !== "desc") {
      setOrderValue("desc");
      dispatch(setSort({ order: "desc", sort: value }));
    } else {
      setOrderValue("asc");
      dispatch(setSort({ order: "asc", sort: value }));
    }
  };

  return (
    <Button
      onClick={handleSort}
      endIcon={
        //я поместил стрелочку в конец названия столбца, чтобы избежать дергающейся кнопки.
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
        textOverflow: "ellipsis",
        ":hover": { background: "#f2f2f2" },
      }}
    >
      {value}
    </Button>
  );
}
