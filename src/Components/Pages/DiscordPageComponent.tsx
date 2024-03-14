import React from 'react'
import '../Style/Styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const DiscordPageComponent = () => {
  return (
    <div>
    <h1 className='text-center my-4 titleDiscord' >Discord Software Engineer</h1>
    
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
  <li>Culture:</li>
  <ul className='my-3 textColor' >
    <li>Collaborative Environment: Discord fosters a culture of teamwork and collaboration, where engineers work closely with other teams such as product, design, and community to create impactful features.</li>
    <li>Diversity and Inclusion: Discord values diversity and inclusivity, creating a welcoming environment for people from all backgrounds to contribute and thrive.</li>
    <li>Flexibility: Discord offers flexibility in work arrangements, including remote work options, allowing engineers to maintain a healthy work-life balance.</li>
    <li>Continuous Learning: Engineers have access to various learning resources and opportunities for skill development, enabling them to stay updated with the latest technologies and industry trends.</li>
  </ul>
  <li>Benefits:</li>
  <ul>
    <li>Competitive Compensation: Discord offers competitive salaries and benefits packages, ensuring that engineers are fairly compensated for their contributions.</li>
    <li>Health and Wellness: Discord provides comprehensive health benefits, including medical, dental, and vision coverage, as well as wellness programs to support employee well-being.</li>
    <li>Stock Options: Engineers may have the opportunity to receive stock options, allowing them to share in the company's success and aligning their interests with the company's long-term goals.</li>
    <li>Flexible Time Off: Discord understands the importance of work-life balance and offers generous paid time off policies, including vacation days, holidays, and personal days.</li>
  </ul>
</ul>
      </Tab>
      <Tab eventKey="profile" title="Job Requirements">
        <h1 className='header' >Does the job require the current stack that you know. Would you have learn new skills?</h1>
        <ul className='my-3 textColor' >
  <li>You have 2+ years of experience building backend systems.</li>
  <li>You are comfortable reading and writing code in large existing codebases.</li>
  <li>You understand the basics of observability and monitoring.</li>
  <li>You excel at navigating complex and distributed systems and are excited about finding solutions to complex technical challenges.</li>
  <li>You enjoy coming up with pragmatic solutions to concrete problems using first principles thinking.</li>
  <li>You have strong communication skills and thrive on small, collaborative teams.</li>
  <li><strong>Bonus Points:</strong></li>
  <ul className='my-3 textColor' >
    <li>Experience in Python or Rust.</li>
    <li>Experience working with JavaScript, TypeScript, React, and other web technologies.</li>
    <li>Experience working with systems deployed in a cloud environment (GCP, AWS, etc.).</li>
    <li>You have built or contributed to open source projects.</li>
  </ul>
</ul>
      </Tab>
      <Tab eventKey="contact" title="Goals Achieved in the Position" >
        <h1 className='header' >What goals would you like to achieve in the hypothetical position?
</h1>
<ul className='my-3 textColor' >
  <li>Contribute to the enhancement and optimization of Discord's backend infrastructure to improve performance, scalability, and reliability of the platform.</li>
  <li>Collaborate with cross-functional teams to develop and implement innovative features that enhance user experience and engagement on the Discord platform.</li>
  <li>Continuously improve my skills and knowledge in software development, particularly in areas such as distributed systems, observability, and cloud technologies.</li>
  <li>Actively participate in code reviews, knowledge sharing sessions, and mentorship opportunities to foster a culture of learning and growth within the engineering team.</li>
  <li>Proactively identify and address technical debt and scalability challenges to ensure the long-term sustainability of Discord's technology stack.</li>
  <li>Contribute to open-source projects and engage with the developer community to promote collaboration and knowledge exchange.</li>
  <li>Support Discord's mission of creating a safe and inclusive community by implementing and advocating for best practices in software development, including security and privacy measures.</li>
  <li>Foster a positive and collaborative work environment by actively participating in team meetings, providing constructive feedback, and promoting a culture of respect and transparency.</li>
</ul>
      </Tab>
      <Tab eventKey="job" title="My Skill Set for the Job">
        <h1 className='header'>Do you currently have the skillsets for the job?</h1>
        <ul className='my-3 textColor' >
          <li>I do have the skill set for this job as I know Javascript and have some projects as past experience</li>
          <li>I am comfortable reading and writing code in large exsisitng codebases</li>
          <li>But I am will need 2 years of experience building backend systems</li>
        </ul>
      </Tab>
    </Tabs>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default DiscordPageComponent
