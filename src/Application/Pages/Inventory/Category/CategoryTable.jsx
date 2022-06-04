import * as React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import CategoryTableHeader from './CategoryTableHeader';
import CategoryTableBody from "./CategoryTableBody";

// Table Data
const rows = [
  {
      parentCategory:"Electric Item",
      category:"Home Appliances",
      categoryImage:"https://robohash.org/165626565",
      noOfProduct:23,
      stock:23,
      action: "non"
  
  },
  {
    parentCategory:"Electric Item",
    category:"Home Appliances",
    categoryImage:"https://robohash.org/165626565",
    noOfProduct:23,
    stock:23,
    action: "non"

},
{
  parentCategory:"Electric Item",
  category:"Home Appliances",
  categoryImage:"https://robohash.org/165626565",
  noOfProduct:23,
  stock:23,
  action: "non"

},
{
  parentCategory:"Electric Item",
  category:"Home Appliances",
  categoryImage:"https://robohash.org/165626565",
  noOfProduct:23,
  stock:23,
  action: "non"

}
  ];

  // Table Column Name
  const columns=["Parent Category","Category","Category Image","No of Product","Stock","Action"];
  


export default function CustomizedTables() {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <CategoryTableHeader columns={columns} />
        <CategoryTableBody data={rows}/>
      </Table>
    </TableContainer>
  );
}
