import React , {useState}from 'react'
import './Category.css'
import Stack from '@mui/material/Stack';
import ButtonR from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import  TextField  from '@mui/material/TextField';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import {Button , Modal, Container, Row, Col} from 'react-bootstrap';


import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// Data will be come through Map.Array => () to use in Select Box

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


// This is for uploading image's
function handleImage() {
  console.log("yes")
}

const Category = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };



  return(
    <>
    <div className='main_container'>
      <Stack spacing={2} direction="row">
        <ButtonR variant="contained" startIcon={<AddIcon />} onClick = {handleShow}>
          Add Category's
        </ButtonR>
        <ButtonR variant="contained" startIcon={<ImportExportIcon />}>
          Import
        </ButtonR>
      </Stack>


      {/* Modal Code */}
      
      <div className='modal_div'>
      <Modal show={show} onHide={handleClose}
      size="lg" 
      aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='show-grid'>
        <p><i>The field marked with * are required input fields.</i></p>
        <Container>
          
            <Row>
              <Col xs={10} md={6}>
                <h6>Name*</h6>
                <TextField id="outlined-basic" label="Type Category Name ..." variant="outlined" />
              </Col>
              <Col xs = {8} md = {6}>
                <h6>Image</h6>
                
                <input type="file" name='myfile' onChange={handleImage()} className = "customInput"/>
              </Col>
              </Row>
              <Row>
                <Col xs = {12} md = {12}>
                  <h6>Parent Category</h6>
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-chip-label" >Chip</InputLabel>
                        <Select
                          labelId="demo-multiple-chip-label"
                          id="demo-multiple-chip"
                          multiple
                          value={personName}
                          onChange={handleChange}
                          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                          renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {selected.map((value) => (
                                <Chip key={value} label={value} />
                              ))}
                            </Box>
                          )}
                          MenuProps={MenuProps}
                        >
                          {names.map((name) => (
                            <MenuItem
                              key={name}
                              value={name}
                              style={getStyles(name, personName, theme)}
                            >
                              {name}
                            </MenuItem>
                          ))}
                        </Select>
                  </FormControl>
                </Col>
              </Row>
            
         </Container>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
    </>
  )
}

export default Category