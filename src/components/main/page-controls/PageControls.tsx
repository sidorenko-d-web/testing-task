import { Box, TablePagination, Typography } from "@mui/material";
import styles from './page-controls.module.sass'

import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

export function PageControls() {
  
  const handleChangePage = () => {
    
  }
  const handleChangeRowsPerPage = () => {
    
  }
  return (
    <Box className={styles.controls}>
      <TablePagination 
        rowsPerPage={10}
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        count={100}
        page={0}
        component='div'
        labelDisplayedRows={({from, to, count}) => `${from}-${to} of ${count}`} 
        slotProps={{
          select: {
            'aria-label': 'Rows per page',
          },
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  )
}
