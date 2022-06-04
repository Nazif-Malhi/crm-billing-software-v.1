import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#536dfe',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


export default function CustomizedTables(props) {
  let {columns}=props;
  return (
     <TableHead>
          <TableRow>
            {columns.map(column=>(
                <StyledTableCell>{column}</StyledTableCell>    
            ))}  
          </TableRow>
        </TableHead>
  );
}
