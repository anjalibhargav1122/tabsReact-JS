import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faFile, faGrip, faReorder, faUser } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  return (
    <div>
        <Container className='mt-3 '>
         <Row >
       

     
        <Col className='bg-white rounded   d-flex pt-2 pb-2 align-items-center'  md='9' lg='9'><span className='h6 mb-0 me-2 '>Quick Actions</span>  <Button className='bn ms-2'><FontAwesomeIcon className='me-2' icon={faReorder}/> +Create Order</Button><Button className='bn ms-2 '><FontAwesomeIcon className=' me-2' icon={faFile}/> Share Quote</Button> <Button className='bn ms-2 '><FontAwesomeIcon className=' me-2' icon={faGrip}/> Add Product</Button>
                <Button className='bn ms-2'><FontAwesomeIcon className=' me-2' icon={faReorder}/> Create Invoice</Button>
               </Col>
        
             

                <Col className='d-flex'  md='3' lg='3'>
                <Button className='border-0 bg-white position-relative'><FontAwesomeIcon className='text-dark'  icon={faBell}/> <div className='cir'></div> </Button>  <Dropdown className='ms-2 '>
      <Dropdown.Toggle  className='bg-white text-dark border-0 h-100' id="dropdown-basic">
       
      <FontAwesomeIcon className=' me-2 ' icon={faUser}/> Perfect Engineering
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                </Col>
              
        
      
        </Row>
      

</Container>
    </div>
  )
}

export default Header