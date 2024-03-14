import React from 'react'
import '../Style/Styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const CiscoPageComponent = () => {
  return (
    <div>
      <h1 className='text-center my-4 titleCisco' >Cisco Full Stack Software Engineer Intern</h1>
      
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
  <li>Culture: Cisco is known for fostering a culture of innovation, collaboration, and inclusivity. The company values diversity and strives to create an environment where employees feel empowered to bring their authentic selves to work. This culture of openness and collaboration aligns with my own values and would provide an inspiring and supportive atmosphere in which to grow and learn.</li>
  <li>Benefits: Cisco offers competitive benefits packages, including health insurance, retirement plans, and professional development opportunities. As an intern, these benefits would provide valuable support and resources to help me thrive both personally and professionally during my time at the company.</li>
  <li>Hybrid Work Environment: Cisco's embrace of hybrid work models allows for flexibility in where and how work gets done. This flexibility is particularly appealing as it offers the opportunity to collaborate with colleagues from diverse backgrounds and locations while also providing the autonomy to manage my own schedule and work environment effectively.</li>
</ul>
      </Tab>
      <Tab eventKey="profile" title="Job Requirements">
        <h1 className='header' >Does the job require the current stack that you know. Would you have learn new skills?</h1>
      <ul className='my-3 textColor' >
  <li>You are pursuing a technical bachelor's degree or have equivalent experience with a strong foundation in the fundamentals of computer science -OR- pursuing a software/coding boot camp (or educational training program) and/or technical associates degree with a strong foundation in the fundamentals of computer science. Individuals who have completed the relevant networking boot camp within the last 6 months will be considered</li>
  <li>You strive to build rich and dynamic web applications with front-end frameworks such as React, Redux, Ember, or Angular</li>
  <li>You are familiar with programming languages and web frameworks like Ruby (Rails, EventMachine), Python (Django, Flask), or Node.js (Express)</li>
  <li>You have worked with SQL and relational Databases</li>
  <li>You would flourish within a small engineering team and are excited to tackle open-ended problems</li>
</ul>
      </Tab>
      <Tab eventKey="contact" title="Goals Achieved in the Position" >
        <h1 className='header' >What goals would you like to achieve in the hypothetical position?
</h1>
<ul className='my-3 textColor' >
  <li>Gain Hands-On Experience: I aim to apply theoretical knowledge gained from my studies to real-world projects, gaining practical experience in developing software solutions across the full stack.</li>
  <li>Learn New Technologies: I am eager to expand my skill set by learning new technologies and tools used in the industry, particularly those relevant to full stack development, cloud computing, and networking.</li>
  <li>Receive Mentorship: I look forward to learning from experienced professionals at Cisco, receiving mentorship and guidance to further develop my technical skills, enhance my problem-solving abilities, and grow as a software engineer.</li>
  <li>Improve Communication Skills: I recognize the importance of effective communication in a collaborative work environment and seek to improve my communication skills, both written and verbal, to articulate ideas, collaborate with team members, and convey technical concepts effectively.</li>
</ul>
      </Tab>
      <Tab eventKey="job" title="My Skill Set for the Job">
        <h1 className='header'>Do you currently have the skillsets for the job?</h1>
        <ul className='my-3 textColor' >
          <li>I do have the skill set for this job as I have at CodeStack for more than 6 months</li>
          <li>I have some experience in React and will learn Angular</li>
          <li>The only thing I would need to learn is maybe Ruby, Python, or Node.js</li>
        </ul>
      </Tab>
    </Tabs>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default CiscoPageComponent
