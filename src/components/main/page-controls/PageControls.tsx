import { Box, TablePagination } from "@mui/material";
import styles from "./page-controls.module.sass";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setRequestString } from "../../../redux/slices/requestStringSlice";

interface IPageControlsProps { count: number }

export function PageControls({ count }: IPageControlsProps) {
  const { request } = useAppSelector((state) => state.requestStringSlice);
  const dispatch = useAppDispatch();

  //обе функции определяют параметры запроса
  const handleChangePage = (_: any, newPage: number) => {
    dispatch(setRequestString({ page: newPage + 1 }));
  };
  
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setRequestString({ per_page: event.target.value }));
    dispatch(setRequestString({ page: 1 }));
  };

  return (
    <Box className={styles.controls}>
      <TablePagination
        rowsPerPage={Number(request.per_page)}
        rowsPerPageOptions={[5, 10, 25, 100]}
        count={count}
        page={Number(request.page) - 1}
        component="div"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} of ${count}`
        }
        slotProps={{
          select: {
            "aria-label": "Rows per page",
          },
          actions: {
            nextButton: {
              value: "next",
            },
            previousButton: {
              value: "prev",
            },
          },
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
