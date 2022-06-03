import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import ButtonR from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import InputAdornment from '@mui/material/InputAdornment';

// For date 
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';




import  TextField  from '@mui/material/TextField';

import ImportExportIcon from '@mui/icons-material/ImportExport';
import {Button , Modal, Container, Row, Col} from 'react-bootstrap';


import { top100Films } from '../../../Data/Top100FilmsData';
import Autocomplete from '@mui/material/Autocomplete';


import { useTheme } from '@mui/material/styles';

function handleFile(){
  console.log("File")
}

const AddExpense = () => {
  const [show, setShow] = useState(false);
  const [showImport, setShowImport] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseIm = () => setShowImport(false);
  const handleShowIm = () => setShowImport(true);

  const [value, setValue] = useState(new Date());

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
      {/* Add Expensive Modal  */}
      <div className='addmodal_div'>
      <Modal show={show} onHide={handleClose}
      size="lg" 
      aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton style={{backgroundColor : '#F7F7F7'}}>
          <Modal.Title>Add Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body className='show-grid'>
        <p><i style={{color:'red'}}>The field marked with * are required input fields.</i></p>
        <Container>
          
            <Row>
              <Col xs={10} md={6}>
              <h6>Date *</h6>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="For desktop"
                value={value}
                
                minDate={new Date('2017-01-01')}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField size='small' {...params} />}
              />
        </LocalizationProvider>
              </Col>
              <Col xs = {8} md = {6}>
                <h6>Expense Category *</h6>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 220 }}
                  size = 'small'
                  renderInput={(params) => <TextField {...params} label="Movie" />}
                />
              </Col>
              </Row>
              <Row>
              <Col xs = {8} md = {6}>
                <h6>Ware House *</h6>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 220 }}
                  size = 'small'
                  renderInput={(params) => <TextField {...params} label="Movie" />}
                />
              </Col>
              <Col xs = {8} md = {6}>
                <h6>Amount *</h6>
              <TextField id="outlined-basic" label="Product Name" variant="outlined" size="small" style={{width:220}}/>
              </Col>
              </Row>
              <Row>
              <Col xs = {8} md = {6}>
                <h6>Account</h6>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 220 }}
                  size = 'small'
                  renderInput={(params) => <TextField {...params} label="Movie" />}
                />
              </Col>
              </Row>
              <Row>
                <Col xs = {18} md = {12}>
                <h6>Description</h6>
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  style = {{width:'100%'}}
                />
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

export default AddExpense