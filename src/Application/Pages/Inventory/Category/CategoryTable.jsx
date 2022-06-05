import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import CategoryTableHeader from './CategoryTableHeader';
import CategoryTableBody from "./CategoryTableBody";
/////
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function DropDown() {
  const [action, setAction] = React.useState('');

  const handleChange = (event) => {
    if(event.target.value=="edit")
    console.log("edit");
    if(event.target.value=="delete")
    console.log("delete");
    // setAction(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 100 ,minHeight:20 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Action</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={Action}
          label="Action"
          onChange={handleChange}
        >
          <MenuItem value={"edit"}>Edit</MenuItem>
          <MenuItem value={"delete"}>Delete</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}



/////

// Table Data
const rows = [
  {
      parentCategory:"Electric Item",
      category:"Home Appliances",
      categoryImage:"https://robohash.org/165626565",
      noOfProduct:23,
      stock:23,
      action: <DropDown/>
  
  },
  {
    parentCategory:"Electric Item",
    category:"Home Appliances",
    categoryImage:"https://robohash.org/165626565",
    noOfProduct:23,
    stock:23,
    action: <DropDown/>

},
{
  parentCategory:"Electric Item",
  category:"Home Appliances",
  categoryImage:"https://robohash.org/165626565",
  noOfProduct:23,
  stock:23,
  action: <DropDown/>

},
{
  parentCategory:"Electric Item",
  category:"Home Appliances",
  categoryImage:"https://robohash.org/165626565",
  noOfProduct:23,
  stock:23,
  action: <DropDown/>

}
  ];

  // Table Column Name
  const columns=["Parent Category","Category","Category Image","No of Product","Stock","Action"];
  

   const CustomizedTables=React.forwardRef((props, ref) =>  {

  return (
    <TableContainer component={Paper} ref={ref}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <CategoryTableHeader columns={columns} />
        <CategoryTableBody data={rows}/>
      </Table>
    </TableContainer>
  );
});
export default CustomizedTables;