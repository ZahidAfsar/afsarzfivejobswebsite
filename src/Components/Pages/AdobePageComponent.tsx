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
        <h1 className='header' >Dive into why you want to work there (culture, benefits, hybrid, location)
        </h1>
        <ul className='my-3 textColor' >
  <li>Growth Opportunities: Adobe prioritizes the growth and development of its employees, offering various opportunities for learning and advancement. Whether through training programs, mentorship opportunities, or challenging projects, Adobe is committed to helping you grow both personally and professionally.</li>
  <li>Great Benefits: Adobe offers competitive compensation packages, including benefits such as health insurance, retirement plans, and generous paid time off. Additionally, Adobe provides perks like employee discounts, wellness programs, and flexible work arrangements.</li>
  <li>Company Culture: Adobe's company culture is often praised for its inclusivity, diversity, and commitment to social responsibility. Employees at Adobe feel valued, supported, and empowered to bring their authentic selves to work.</li>
  <li>Work-Life Balance: Adobe understands the importance of work-life balance and offers flexible work arrangements to accommodate employees' needs. Whether through remote work options, flexible scheduling, or generous parental leave policies, Adobe strives to support its employees in achieving a healthy balance between work and life.</li>
</ul>
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
        <h1 className='header' >What goals would you like to achieve in the hypothetical position?
</h1>
<ul className='my-3 textColor' >
  <li>Expand Skillset and Knowledge: Continuously learn and grow by exploring new tools, techniques, and technologies within Adobe's software suite and related areas.</li>
  <li>Build Strong Relationships: Focus on building strong relationships with colleagues, mentors, and stakeholders within the company to foster collaboration and communication.</li>
  <li>Embrace Creativity and Innovation: Embrace Adobe's culture of creativity and innovation, exploring new ideas and pushing the boundaries of what's possible.</li>
  <li>Contribute to Company Culture: Actively contribute to maintaining and enhancing Adobe's inclusive and supportive company culture through participation in initiatives and embodying Adobe's values.</li>
  <li>Strive for Personal Growth and Development: Prioritize personal growth and development, setting goals for self-improvement, seeking feedback, and proactively seeking advancement opportunities.</li>
</ul>
      </Tab>
      <Tab eventKey="job" title="My Skill Set for the Job">
        <h1 className='header'>Do you currently have the skillsets for the job?</h1>
        <ul className='my-3 textColor' >
          <li>I do have the skill set for this job as I know Javascript and have some projects as past experience</li>
          <li>I also am Familar with the software development lifescycle</li>
          <li>But I am not enrolled in college to be eligable for this</li>
        </ul>
      </Tab>
    </Tabs>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default AdobePageComponent
