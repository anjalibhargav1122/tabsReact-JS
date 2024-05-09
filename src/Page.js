import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './Common.css'
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsTurnRight, faCalendar, faCheck, faCopy, faDashboard, faDesktop, faIceCream, faInbox, faRefresh, faSadCry, faShip, faUser } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
import SideBar from './common/SideBar';
import Header from './common/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Page = () => {
const [c, setc]= useState();
useEffect(()=>{
  setc(1);
},[])
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg='2' md='2'>

            <SideBar />
          </Col>
          <Col lg='10' md='10'>

            <Header />

            <Container className='mt-4 '>
              <Row>
                <Col lg='6' md='6' >
                  <Card className='bg-white rounded'>

                    <Card.Body>
                      <Card.Title className='text-secondary'>Welcome Back</Card.Title>
                      <Card.Text className='fs-3 fw-bold'>
                        Perfect Engineering
                      </Card.Text><Card.Text className='text-secondary mb-0'>Your Profile URL</Card.Text>
                      <InputGroup className="mb-2">
                        <Form.Control readOnly
                          value="https://indibaba.com/users/perfect_engineering.html"
                          aria-label="Recipient's username"
                          aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-success" className='text-dark fw-bold ' id="button-addon2">
                          <FontAwesomeIcon className=' me-2 ' icon={faCopy} />  Copy
                        </Button>
                      </InputGroup>
                    </Card.Body>
                  </Card>
                  <Card className='bg-white rounded mt-3'>
                    <Card.Body>
                      <div className='d-flex justify-content-between'>  <div><span className='h6 fw-bold'>Orders</span>  <FontAwesomeIcon className=' me-2 text-info ms-1' icon={faCalendar} /> <u>17/11/2023</u> <span>to</span>  <FontAwesomeIcon className=' me-2 text-info ms-1' icon={faCalendar} /> <u>17/11/2023</u>   <Button variant="secondary" >
                        <FontAwesomeIcon className=' me-2 ' icon={faRefresh} />
                      </Button> </div> <Button variant="secondary" className='fw-bold' >+Create
                        </Button></div>
                      <Container className='mt-3'>
                        <Row>
                          <Col lg='6' md='6'>
                            <Card>
                              <Card.Body >

                                <div className='d-flex'>  <FontAwesomeIcon className='bg-light p-4 rounded me-2' icon={faDesktop} />
                                  <div>
                                    <Card.Title>
                                      3456
                                    </Card.Title>
                                    <Card.Text>
                                      Total Orders
                                    </Card.Text>
                                  </div></div>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col lg='6' md='6'>   <Card>
                            <Card.Body >

                              <div className='d-flex text-success'>  <FontAwesomeIcon className='bg-light p-4 rounded me-2' icon={faCheck} />
                                <div>
                                  <Card.Title>
                                    3000
                                  </Card.Title>
                                  <Card.Text>
                                    Confirmed
                                  </Card.Text>
                                </div></div>
                            </Card.Body>
                          </Card></Col>

                        </Row>
                      </Container>
                      <Container className='mt-3'>
                        <Row>
                          <Col lg='6' md='6'>
                            <Card>
                              <Card.Body >

                                <div className='d-flex text-danger'>  <FontAwesomeIcon className=' p-4 rounded me-2' icon={faDesktop} />
                                  <div>
                                    <Card.Title>
                                      45
                                    </Card.Title>
                                    <Card.Text>
                                      Cancelled
                                    </Card.Text>
                                  </div></div>
                              </Card.Body>
                            </Card>
                          </Col>
                          <Col lg='6' md='6'>   <Card>
                            <Card.Body >

                              <div className='d-flex text-info'>  <FontAwesomeIcon className='bg-light p-4 rounded me-2' icon={faArrowsTurnRight} />
                                <div>
                                  <Card.Title>
                                    3456
                                  </Card.Title>
                                  <Card.Text>
                                    Returned
                                  </Card.Text>
                                </div></div>
                            </Card.Body>
                          </Card></Col>

                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>

                </Col>
                <Col lg='6' md='6' className='yu'>
                  <Card className='bg-white rounded '>
                    <Card.Body>
                      <div className='d-flex justify-content-between border-bottom pb-3 mb-3'><div> <FontAwesomeIcon className='me-2' icon={faInbox} /><span className='fw-bold fs-5'>Inbox</span></div>
                        <div className='d-flex '><div><span onClick={()=>{setc(1)}} className='fw-bold border-bottom border-dark border-2 pb-4 cp'>Leads</span>  <Badge className='me-4 ms-1' pill bg="danger">
                          10+
                        </Badge></div>
                          <div><span className='cp'  onClick={()=>{setc(2)}}>Chats</span>  <Badge className='me-5 ms-1' pill bg="danger">
                            10+
                          </Badge></div></div>
                      </div>
                    <div style={{display:c ===1 ?`block`:`none`}}>  <Row className='border me-1 ms-1 mb-2 pt-2 pb-2' >
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faUser} /></Col>
                              <Col md='3' lg='3'><span className='fw-bold'>Abhary Srivastva</span></Col>
                              <Col md='4' lg='4'><div className='text-secondary'><FontAwesomeIcon icon={faDashboard} /> Electronics</div><div><FontAwesomeIcon icon={faShip} /> IOT Sensor</div></Col>
                              <Col md='3' lg='3'><FontAwesomeIcon className='text-info' icon={faCalendar} /> <u>17/11/2023</u></Col>
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faArrowsTurnRight} /></Col>

                            </Row>
                            <Row className='border me-1 ms-1 mb-2 pt-2 pb-2' >
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faUser} /></Col>
                              <Col md='3' lg='3'><span className='fw-bold'>Abhary Srivastva</span></Col>
                              <Col md='4' lg='4'><div className='text-secondary'><FontAwesomeIcon icon={faDashboard} /> Electronics</div><div><FontAwesomeIcon icon={faShip} /> IOT Sensor</div></Col>
                              <Col md='3' lg='3'><FontAwesomeIcon className='text-info' icon={faCalendar} /> <u>17/11/2023</u></Col>
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faArrowsTurnRight} /></Col>

                            </Row>
                            <Row className='border me-1 ms-1 mb-2 pt-2 pb-2' >
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faUser} /></Col>
                              <Col md='3' lg='3'><span className='fw-bold'>Abhary Srivastva</span></Col>
                              <Col md='4' lg='4'><div className='text-secondary'><FontAwesomeIcon icon={faDashboard} /> Electronics</div><div><FontAwesomeIcon icon={faShip} /> IOT Sensor</div></Col>
                              <Col md='3' lg='3'><FontAwesomeIcon className='text-info' icon={faCalendar} /> <u>17/11/2023</u></Col>
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faArrowsTurnRight} /></Col>

                            </Row>
                            <Row className='border me-1 ms-1 mb-2 pt-2 pb-2' >
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faUser} /></Col>
                              <Col md='3' lg='3'><span className='fw-bold'>Abhary Srivastva</span></Col>
                              <Col md='4' lg='4'><div className='text-secondary'><FontAwesomeIcon icon={faDashboard} /> Electronics</div><div><FontAwesomeIcon icon={faShip} /> IOT Sensor</div></Col>
                              <Col md='3' lg='3'><FontAwesomeIcon className='text-info' icon={faCalendar} /> <u>17/11/2023</u></Col>
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faArrowsTurnRight} /></Col>

                            </Row>
                            <Row className='border me-1 ms-1 mb-2 pt-2 pb-2' >
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faUser} /></Col>
                              <Col md='3' lg='3'><span className='fw-bold'>Abhary Srivastva</span></Col>
                              <Col md='4' lg='4'><div className='text-secondary'><FontAwesomeIcon icon={faDashboard} /> Electronics</div><div><FontAwesomeIcon icon={faShip} /> IOT Sensor</div></Col>
                              <Col md='3' lg='3'><FontAwesomeIcon className='text-info' icon={faCalendar} /> <u>17/11/2023</u></Col>
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faArrowsTurnRight} /></Col>

                            </Row>
                            <Row className='border me-1 ms-1 pt-2 pb-2' >
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faUser} /></Col>
                              <Col md='3' lg='3'><span className='fw-bold'>Abhary Srivastva</span></Col>
                              <Col md='4' lg='4'><div className='text-secondary'><FontAwesomeIcon icon={faDashboard} /> Electronics</div><div><FontAwesomeIcon icon={faShip} /> IOT Sensor</div></Col>
                              <Col md='3' lg='3'><FontAwesomeIcon className='text-info' icon={faCalendar} /> <u>17/11/2023</u></Col>
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faArrowsTurnRight} /></Col>

                            </Row></div>
                            <div style={{display:c ===2 ?`block`:`none`}}>  <Row className='border me-1 ms-1 mb-2 pt-2 pb-2' >
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faUser} /></Col>
                              <Col md='3' lg='3'><span className='fw-bold'>Abhary Srivastva</span></Col>
                              <Col md='4' lg='4'><div className='text-secondary'><FontAwesomeIcon icon={faSadCry} /> Electronics</div><div><FontAwesomeIcon icon={faIceCream} /> IOT Sensor</div></Col>
                              <Col md='3' lg='3'><FontAwesomeIcon className='text-info' icon={faCalendar} /> <u>17/11/2023</u></Col>
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faArrowsTurnRight} /></Col>

                            </Row>
                            <Row className='border me-1 ms-1 mb-2 pt-2 pb-2' >
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faUser} /></Col>
                              <Col md='3' lg='3'><span className='fw-bold'>Abhary Srivastva</span></Col>
                              <Col md='4' lg='4'><div className='text-secondary'><FontAwesomeIcon icon={faSadCry} /> Electronics</div><div><FontAwesomeIcon icon={faIceCream} /> IOT Sensor</div></Col>
                              <Col md='3' lg='3'><FontAwesomeIcon className='text-info' icon={faCalendar} /> <u>17/11/2023</u></Col>
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faArrowsTurnRight} /></Col>

                            </Row>
                            <Row className='border me-1 ms-1 mb-2 pt-2 pb-2' >
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faUser} /></Col>
                              <Col md='3' lg='3'><span className='fw-bold'>Abhary Srivastva</span></Col>
                              <Col md='4' lg='4'><div className='text-secondary'><FontAwesomeIcon icon={faSadCry} /> Electronics</div><div><FontAwesomeIcon icon={faIceCream} /> IOT Sensor</div></Col>
                              <Col md='3' lg='3'><FontAwesomeIcon className='text-info' icon={faCalendar} /> <u>17/11/2023</u></Col>
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faArrowsTurnRight} /></Col>

                            </Row>
                            <Row className='border me-1 ms-1 mb-2 pt-2 pb-2' >
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faUser} /></Col>
                              <Col md='3' lg='3'><span className='fw-bold'>Abhary Srivastva</span></Col>
                              <Col md='4' lg='4'><div className='text-secondary'><FontAwesomeIcon icon={faSadCry} /> Electronics</div><div><FontAwesomeIcon icon={faIceCream} /> IOT Sensor</div></Col>
                              <Col md='3' lg='3'><FontAwesomeIcon className='text-info' icon={faCalendar} /> <u>17/11/2023</u></Col>
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faArrowsTurnRight} /></Col>

                            </Row>
                            <Row className='border me-1 ms-1 mb-2 pt-2 pb-2' >
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faUser} /></Col>
                              <Col md='3' lg='3'><span className='fw-bold'>Abhary Srivastva</span></Col>
                              <Col md='4' lg='4'><div className='text-secondary'><FontAwesomeIcon icon={faSadCry} /> Electronics</div><div><FontAwesomeIcon icon={faIceCream} /> IOT Sensor</div></Col>
                              <Col md='3' lg='3'><FontAwesomeIcon className='text-info' icon={faCalendar} /> <u>17/11/2023</u></Col>
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faArrowsTurnRight} /></Col>

                            </Row>
                            <Row className='border me-1 ms-1 pt-2 pb-2' >
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faUser} /></Col>
                              <Col md='3' lg='3'><span className='fw-bold'>Abhary Srivastva</span></Col>
                              <Col md='4' lg='4'><div className='text-secondary'><FontAwesomeIcon icon={faSadCry} /> Electronics</div><div><FontAwesomeIcon icon={faIceCream} /> IOT Sensor</div></Col>
                              <Col md='3' lg='3'><FontAwesomeIcon className='text-info' icon={faCalendar} /> <u>17/11/2023</u></Col>
                              <Col md='1' lg='1'><FontAwesomeIcon icon={faArrowsTurnRight} /></Col>

                            </Row></div>
                    </Card.Body>
                  </Card>
                </Col>

              </Row>
            </Container>


          </Col>

        </Row>
      </Container>
    </div>
  )
}

export default Page