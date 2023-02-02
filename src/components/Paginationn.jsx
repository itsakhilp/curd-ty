import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Paginationn() {

    // const { currentPage, maxPageLimit, minPageLimit} = props;
    // const totalPages = props.response.totalPages-1;
    // const data = props.response.data;
    
  return (
    <Stack spacing={3}  >
      <Pagination count={2} style={{marginLeft:'auto',marginRight:'auto',marginTop:'10px    '}}/>
      {/* <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled /> */}
    </Stack>
  );
}