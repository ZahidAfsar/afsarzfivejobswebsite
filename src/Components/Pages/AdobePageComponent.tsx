import React from 'react'
import '../Style/Styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const AdobePageComponent = () => {
  return (
    <div>
      <h1 className='text-center my-3 title' >Adobe 2024 Software Intern</h1>
    
    <Container className='pt-4' >
      <Row className='pt-5' >
        <Col>
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home"  title="Why I want to work Here">
      Dive into why you want to work there (culture, benefits, hybrid, location)
      </Tab>
      <Tab eventKey="profile" title="Job Requirements">
        <h1 className='header' >Does the job require the current stack that you know. Would you have learn new skills?</h1>
      <ul className='my-3 textColor' >
        <li>
        Currently enrolled full time and pursuing a Bachelor's or Master’s in Computer Science, Computer Engineering, Electrical Engineer, or equivalent experience required 
        </li>
        <li>
        Strong technical background with analytical and problem-solving skills 
        </li>
        <li>
        Previous related experience in software engineering (applicable coursework, projects, internships, etc.) 
        </li>
        <li>
        Proficiency and experience with at least one or more of the following: Java, C++, JavaScript, Python 
        </li>
        <li>
      Familiar with the software development lifecycle - designing, developing, deploying, and maintaining web and mobile apps 
        </li>
        <li>
      Results-oriented, with ability and interest in learning new technologies and adapting quickly to new requirements and environments 
        </li>
        <li>
      Excellent verbal and written communication skills; can effectively articulate complex ideas and influence others through well-reasoned explanations. 
        </li>
      </ul>
      </Tab>
      <Tab eventKey="contact" title="Goals Achieved in the Position" >
      What goals would you like to achieve in the hypothetical position?
      </Tab>
      <Tab eventKey="job" title="My Skill Set for the Job">
      Do you currently have the skillsets for the job?
      </Tab>
    </Tabs>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default AdobePageComponent
