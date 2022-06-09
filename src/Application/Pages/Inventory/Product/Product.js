import  {useState} from 'react';
import Stack from '@mui/material/Stack';
import ButtonR from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {Button , Modal, Container, Row, Col , InputGroup, FormControl} from 'react-bootstrap';
import  TextField  from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl1 from '@mui/material/FormControl';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import InputAdornment from '@mui/material/InputAdornment';
import { top100Films } from '../../../Data/Top100FilmsData';
import Autocomplete from '@mui/material/Autocomplete';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import './Product.css'
import * as React from 'react';
import TableWithAction from './TableWithAction';
 
function handleFile(){
  console.log("File")
}
// This is for uploading image's
function handleImage() {
  console.log("Image")
}


const Product = () => {
  const [show, setShow] = useState(false);
  const [showImport, setShowImport] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseIm = () => setShowImport(false);
  const handleShowIm = () => setShowImport(true);

  // For DropDown -> Type
  const [type, setType] = useState('');
  //State for Show Hide on Standard
  const [hide , setHide] = useState(false);
  const onServicesShow = () => setHide(true);
  const onServicesHide = () => setHide(false);


  const handleChangeTypeS = (event) => {
    setType(event.target.value);
    if(event.target.value == 'Services'){
      onServicesShow();
    }
    else{
      onServicesHide();
    }

  };

{/* Show on The change state of the Type of Product  */}
const Result = () => {
  return(
      <Row className='Standard'>
          <Col xs={6} md={4}>
          <h6>Product Name*</h6>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 220 }}
            size = 'small'                
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />       
          </Col>
          <Col xs={6} md={4}>
          <h6>Product Name*</h6>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 220 }}
            size = 'small'                
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />       
          </Col>
          <Col xs={6} md={4}>
          <h6>Product Name*</h6>
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
  )

}


  return (
    <div style={{padding:50}}>

     <div className='main_container'>
       <Stack spacing={2} direction="row">
         <ButtonR variant="contained" startIcon={<AddIcon />} onClick = {handleShow}>
           App Product's
         </ButtonR>
        <ButtonR variant="contained" startIcon={<ImportExportIcon />} onClick = {handleShowIm}>
           Import
         </ButtonR>
       </Stack>
       </div>

       {/* Full Screen Modal  ....*/}

       <div className="add_product-Modal" >  
      
        <Modal fullscreen show={show} onHide={handleClose} >  
        <Modal.Header closeButton style={{backgroundColor : '#F7F7F7'}}>  
          <Modal.Title>Add Products</Modal.Title>  
        </Modal.Header>  
        
        <Modal.Body className='show-grid' >
          <Container>
            <Row className='topSpace'>
              <Col xs={6} md={4}>
                <h6>Product Type*</h6>
                <FormControl1 sx={{ minWidth: 220 }} size="small">
                <InputLabel id="demo-select-small">Type</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={type}
                    label="product_type"
                    onChange={handleChangeTypeS}
                  >
                    <MenuItem value="None">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Standard">Standard</MenuItem>
                    <MenuItem value="Services">Services</MenuItem>
                  </Select>
                  </FormControl1>
                  
              </Col>
              <Col xs={6} md={4}>
              <h6>Product Name*</h6>
                  <TextField id="outlined-basic" label="Product Name" variant="outlined" size="small" style={{width:220}}/>
              </Col>
              <Col xs={6} md={4}>
                <h6>Product Code</h6>
                <TextField id ="outlined-basics" label= "Product Code" variant='outlined' size='small'
                  InputProps={{
                    
                    style :{
                      paddingRight: '0px',
                      width:220
                    },
                    endAdornment: (
                      <InputAdornment position="end" >
                        <ButtonR  variant="contained" endIcon={<AutorenewIcon />}
                          style = {{height: '38px', marginBottom:1}}>
                        </ButtonR>
                      </InputAdornment>
                    )
                  }}
                  />
              </Col>
             
              
            </Row>
            <Row className='topSpace'>
            <Col xs={6} md={4}>
              <h6>Brand</h6>
              <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 220 }}
                  size = 'small'
                  renderInput={(params) => <TextField {...params} label="Movie" />}
                />
              </Col>
              <Col xs={6} md={4}>
              <h6>Category *</h6>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 220 }}
                size = 'small'                
                renderInput={(params) => <TextField {...params} label="Movie" />}
              />              
              </Col>
              <Col xs={6} md={4}>
              <h6>Product Name*</h6>
                  <TextField type='number' id="outlined-basic" label="Product Name" variant="outlined" size="small" style={{width:220}}/>
              </Col>
            </Row>
            <Row className='topSpace'>
            <Col xs={6} md={4}>
              <h6>Product Tax</h6>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 220 }}
                size = 'small'                
                renderInput={(params) => <TextField {...params} label="Movie" />}
              />              
              </Col>
              <Col xs={6} md={4}>
              <div className='con' style={{display:"flex"}}>
              <h6>Tax Method</h6>
              <Tooltip title="Add" placement="top-start">
              <ButtonR startIcon={<HelpOutlineIcon />} style ={{marginTop:-5}}>
              </ButtonR>
              </Tooltip>
              </div>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 220 }}
                size = 'small'                
                renderInput={(params) => <TextField {...params} label="Movie" />}
              />              
              </Col>
              <Col xs = {6} md = {4}>
                <h6>Image</h6>
                <input type="file" name='myfile' onChange={handleImage()} className = "customInputForProduct"/>
              </Col>
            </Row>
              {hide ? <Result /> : null}
              <Row className='topSpace'>
                <Col xs = {18} md = {12}>
                  <h6>Short Description</h6>
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  style = {{width:'88%'}}
                />
                </Col>
              </Row>
          </Container>
        </Modal.Body>  
        
        <Modal.Footer>  
          <Button variant="secondary" onClick={handleClose}>Close Modal</Button>  
          <Button variant="primary" onClick={handleClose}>Save changes</Button>  
        </Modal.Footer>  
      </Modal>  
    </div>

    {/* Modal for Import The File ... */}


    <div className='import_Modal_div'>
      <Modal show={showImport} onHide={handleCloseIm}
      size="lg" 
      aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Import Products</Modal.Title>
        </Modal.Header>
        <Modal.Body className='show-grid'>
        <p><i style={{color:'red'}}>The field marked with * are required input fields.</i></p>
        <p>The correct column order is (image, name*, code*, type*, brand, category*, unit_code*, cost*, price*,<br/>
          product_details, variant_name, item_code, additional_price) and you must follow this.<br/>
          To display Image it must be stored in public/images/product directory.<br/>
          Image name must be same as product name</p>
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
    
<TableWithAction/>
    
    </div>
  )
}

export default Product