import React from 'react'
import '../Style/Styles.css';
import { Container, Row, Col } from 'react-bootstrap';

const CiscoPageComponent = () => {
  return (
    <div>
      <h1 className='text-center my-4 titleCisco' >Cisco Full Stack Software Engineer Intern</h1>
      <ul>
        <li>
        Dive into why you want to work there (culture, benefits, hybrid, location)
        </li>
        <li>
        Does the job require the current stack that you know. Would you have learn new skills?
        </li>
        <li>
        What goals would you like to achieve in the hypothetical position?
        </li>
        <li>
        Do you currently have the skillsets for the job?
        </li>
      </ul>
    <Container>
      <Row>
        <Col>
        <h2 className='header' >Why I Want to Work Here</h2>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    </div>
  )
}

export default CiscoPageComponent
