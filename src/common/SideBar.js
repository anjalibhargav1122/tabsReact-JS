import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faComment, faGrip, faManatSign, faPlane, faProcedures, faReorder, faUsers } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import Container from 'react-bootstrap/Container';

const SideBar = () => {
  return (
    <div>

      <Container className='bg-white rounded mt-3 mb-3 ht pt-2 text-center'>
        <h2 className='tx-clr'>Logo</h2>

        <Button className='bttn mt-4 text-start'><FontAwesomeIcon className='ms-1 me-2' icon={faGrip} /> Dashboard</Button>
        <Button className='bg-white border-0 text-dark mt-3 text-start wd'><FontAwesomeIcon className='ms-1 me-2' icon={faComment} /> Inbox <Badge bg="danger" className='rounded-pill ms-2'>10+</Badge></Button>
        <Button className='bg-white border-0 text-dark mt-2 text-start wd'><FontAwesomeIcon className='ms-1 me-2' icon={faProcedures} /> Products </Button>
        <Button className='bg-white border-0 text-dark mt-2 text-start wd'><FontAwesomeIcon className='ms-1 me-2' icon={faUsers} /> Customers </Button>
        <Button className='bg-white border-0 text-dark mt-2 text-start wd'><FontAwesomeIcon className='ms-1 me-2' icon={faReorder} /> Orders </Button>
        <Button className='bg-white border-0 text-dark mt-2 text-start wd'><FontAwesomeIcon className='ms-1 me-2' icon={faManatSign} /> Accounts </Button>
        <Button className='bg-white border-0 text-dark mt-2 text-start wd'><FontAwesomeIcon className='ms-1 me-2' icon={faChartBar} /> Reports </Button>
        <Button className='bg-white border-0 text-dark mt-2 text-start wd'><FontAwesomeIcon className='ms-1 me-2' icon={faPlane} /> My Plans </Button>
      </Container>
    </div>
  )
}

export default SideBar