import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import ButtonR from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import InputAdornment from '@mui/material/InputAdornment';



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


function handleFile(){
  console.log("File")
}

const ExpenseCategory = () => {
  const [show, setShow] = useState(false);
  const [showImport, setShowImport] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseIm = () => setShowImport(false);
  const handleShowIm = () => setShowImport(true);

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

  return (
    <>
    <div className='main_container'>
      <Stack spacing={2} direction="row">
        <ButtonR variant="contained" startIcon={<AddIcon />} onClick = {handleShow}>
          Add Expense Category
        </ButtonR>
        <ButtonR variant="contained" startIcon={<ImportExportIcon />} onClick = {handleShowIm}>
          Import
        </ButtonR>
      </Stack>
       {/* Modal Code */}
      
       <div className='addmodal_div'>
      <Modal show={show} onHide={handleClose}
      size="lg" 
      aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton style={{backgroundColor : '#F7F7F7'}}>
          <Modal.Title>Add Expense Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='show-grid'>
        <p><i style={{color:'red'}}>The field marked with * are required input fields.</i></p>
        <Container>
          
            <Row>
              <Col xs={10} md={6}>
              <h6>Code *</h6>
                <TextField id ="outlined-basics" label= "Product Code" variant='outlined' size='small'
                  InputProps={{
                    
                    style :{
                      paddingRight: '0px',
                      width:270
                    },
                    endAdornment: (
                      <InputAdornment position="end" >
                        <ButtonR  variant="contained"
                          style = {{height: '38px', marginBottom:1}}>
                            Generate
                        </ButtonR>
                      </InputAdornment>
                    )
                  }}
                  />
              </Col>
              <Col xs = {8} md = {6}>
                <h6>Name *</h6>
                <TextField type='number' id="outlined-basic" label="Product Name" variant="outlined" size="small" style={{width:220}}/>
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

      {/* Import Modal File  */}
      <div className='import_Modal_div'>
      <Modal show={showImport} onHide={handleCloseIm}
      size="lg" 
      aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Import Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='show-grid'>
        <p><i style={{color:'red'}}>The field marked with * are required input fields.</i></p>
        <p>The correct column order is (name*, parent_category) and you must follow this.</p>
        <Container>
            <Row>
              <Col xs={10} md={6}>
                <h6>Upload CSV File*</h6>
                <input type="file" name='myfile' onChange={handleFile()} className = "customInput"/>
              </Col>
              <Col xs = {8} md = {6}>
                <h6>Sample File</h6>
                <ButtonR variant="contained" startIcon={<FileDownloadIcon />} style = {{width:"100%" , marginTop: "5px"}}>
                  File Download
                </ButtonR>
              </Col>
              </Row>
         </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseIm}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseIm}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      </div>
    </>
  )
}

export default ExpenseCategory