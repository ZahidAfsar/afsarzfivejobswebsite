import React from 'react'
import '../Style/Styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const TeslaPageComponent = () => {
  return (
    <div>
      <h1 className='text-center my-4 titleTesla' >Tesla Frontend Engineer</h1>
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
        <h1 className='header' >Dive into why you want to work there (culture, benefits, hybrid, location)
        </h1>
        <ul className='my-3 textColor' >
  <li>Culture: Tesla is renowned for its culture of innovation, disruption, and pushing the boundaries of what's possible in the automotive and clean energy industries. The company values bold ideas, creative thinking, and a relentless pursuit of excellence. Being part of such a culture would provide an inspiring environment in which to grow and thrive, surrounded by passionate individuals dedicated to transforming the world.</li>
  <li>Benefits: Tesla offers competitive benefits packages, including health insurance, stock options, and employee discounts. Additionally, the opportunity to work at a company that is leading the charge in sustainable transportation and energy solutions aligns with my personal values and would provide a sense of purpose and fulfillment in my work.</li>
  <li>Hybrid Work Environment: Tesla's embrace of hybrid work models allows for flexibility in where and how work gets done. This flexibility is particularly appealing as it offers the opportunity to collaborate with colleagues from diverse backgrounds and locations while also providing the autonomy to manage my own schedule and work environment effectively.</li>
  <li>Location: This job is located in Fremont California and within communting distance</li>
</ul>
      </Tab>
      <Tab eventKey="profile" title="Job Requirements">
        <h1 className='header' >Does the job require the current stack that you know. Would you have learn new skills?</h1>
      <ul className='my-3 textColor' >
  <li>For this position, we are considering candidates at all levels of experience building web and/or mobile experiences or who possess other evidence of exceptional ability</li>
  <li>Solid understanding of fundamental web technologies such as HTML, CSS, and JavaScript</li>
  <li>Solid communication skills</li>
  <li>Experience with common front-end development tools such as TypeScript, Webpack, NPM, Node, Express, Jest, React Testing Library, Docker, etc.</li>
  <li>Knowledge of modern web standards, cross-browser compatibility, and accessibility</li>
</ul>
      </Tab>
      <Tab eventKey="contact" title="Goals Achieved in the Position" >
        <h1 className='header' >What goals would you like to achieve in the hypothetical position?
</h1>
<ul className='my-3 textColor' >
  <li>Collaborate Effectively: I strive to collaborate effectively with cross-functional teams, including designers, product managers, and backend engineers, to translate business requirements into well-designed and implementable frontend solutions that align with Tesla's goals and priorities.</li>
  <li>Continuous Learning and Growth: I seek to continuously expand my knowledge and skills in frontend development, staying updated with the latest technologies, tools, and best practices to drive continuous improvement and innovation in my work at Tesla.</li>
  <li>Contribute to the Community: I aim to actively contribute to the frontend development community, sharing insights, best practices, and lessons learned from my experiences at Tesla through open-source contributions, blog posts, and participation in industry events and conferences.</li>
</ul>
      </Tab>
      <Tab eventKey="job" title="My Skill Set for the Job">
        <h1 className='header'>Do you currently have the skillsets for the job?</h1>
        <ul className='my-3 textColor' >
          <li>My skill set matches with the Job requirements</li>
          
        </ul>
      </Tab>
    </Tabs>
        </Col>
      </Row>
    </Container>
    </div>

  )
}

export default TeslaPageComponent
