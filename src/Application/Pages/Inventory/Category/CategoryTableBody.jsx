import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables(props) {
  let {data}=props;
  let rows=data.map(row=>Object.values(row));

  return (
       <TableBody>
          {rows.map((row,index) => ( 
             <StyledTableRow>
               {row.map(cell=> <StyledTableCell key={index}>{cell}</StyledTableCell>)}
            </StyledTableRow> 
          ))}
        </TableBody>
    
  )
}
