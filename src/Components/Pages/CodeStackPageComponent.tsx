import React from 'react'
import '../Style/Styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const CodeStackPageComponent = () => {
  return (
    <div>
      <h1 className='text-center my-4 title' >CodeStack Web Developer</h1>
        
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
        <li>Culture: At SJCOE CodeStack, I'm drawn to the culture of creativity, collaboration, and community. It's not just about coding; it's about working together with a diverse group of people who are passionate about using technology to make a positive impact in education. The supportive and inclusive atmosphere would provide the perfect environment for me to grow both personally and professionally.</li>
  <li>Benefits: SJCOE CodeStack offers great benefits that go beyond the typical perks. From professional development opportunities to a supportive work-life balance, I know I'll be well taken care of as a part of the team. Plus, knowing that my work is contributing to improving education for students in San Joaquin County is incredibly rewarding.</li>
  <li>Hybrid Work Environment: The hybrid work model at SJCOE CodeStack provides flexibility, allowing me to work both in-office and remotely. This flexibility is invaluable, giving me the freedom to structure my workday in a way that maximizes productivity and fits my lifestyle.</li>
  <li>Location: Located in San Joaquin County, SJCOE CodeStack is in Stockton, California</li>
</ul>
      </Tab>
      <Tab eventKey="profile" title="Job Requirements">
        <h1 className='header' >Does the job require the current stack that you know. Would you have learn new skills?</h1>
        <ul className='my-3 textColor' >
 
  <li>Possess a Bachelor’s Degree with a concentration in computer-related technology or two years of experience in web development.</li>
  <li>DESIRABLE QUALIFICATIONS-EDUCATION, TRAINING, AND EXPERIENCE:
    <ul>
      <li>Proficient in Model View Controller (MVC) architecture, C#, JavaScript, jQuery, HTML, HTML5, CSS, Transact-SQL, AJAX, JSON, Bootstrap, Visual Studio, and Backbone.js.</li>
    </ul>
  </li>
  <li>KNOWLEDGE, SKILLS, AND ABILITIES:
    <ul>
      <li>Communication Skills:
        <ul>
          <li>Ability to work well independently, and as a team member.</li>
          <li>Possess a strong and demonstrable commitment to customer satisfaction.</li>
          <li>Ability to work well with staff, school personnel, students, outside agencies, and customers.</li>
          <li>Ability to communicate verbally and in writing.</li>
        </ul>
      </li>
      <li>Front-end web skills:
        <ul>
          <li>Expertise in HTML, HTML5 JavaScript, CSS, jQuery, AJAX, JSON, Web API, and Bootstrap.</li>
          <li>Experience with Backbone.js is desirable.</li>
        </ul>
      </li>
      <li>Back-end web skills:
        <ul>
          <li>Understanding of object-oriented programming.</li>
          <li>Proficiency in C#, Model View Controller (MVC) architecture, Razor, Dependency Injection, and Visual Studio.</li>
        </ul>
      </li>
      <li>Database skills:
        <ul>
          <li>Proficiency in Microsoft SQL Server and Transact-SQL.</li>
          <li>Knowledge of the rules of database normalization.</li>
          <li>Ability to design a well-structured relational database multiple related tables.</li>
          <li>Ability to write, insert, update, and delete statements as well as stored procedures, functions, and complex queries that join several tables.</li>
          <li>Knowledge of database indexes as well as experience in using indexes to increase query performance.</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
      </Tab>
      <Tab eventKey="contact" title="Goals Achieved in the Position" >
        <h1 className='header' >What goals would you like to achieve in the hypothetical position?
</h1>
<ul className='my-3 textColor' >
  <li>Deliver Innovative Solutions: I aim to contribute to the development of innovative web solutions that enhance the educational experience for students, teachers, and administrators. This involves creating user-friendly interfaces, optimizing performance, and integrating cutting-edge technologies to make learning more engaging and effective.</li>
  
  <li>Collaborate Effectively: I strive to collaborate effectively with cross-functional teams, including designers, educators, and other developers. By fostering a collaborative environment, we can brainstorm creative ideas, solve complex problems, and deliver high-quality solutions that meet the needs of our users.</li>
  
  <li>Continuous Learning and Growth: In the fast-paced world of web development, there's always something new to learn. I'm committed to continuously expanding my knowledge and skills, staying updated with the latest technologies, best practices, and industry trends. This will not only help me excel in my role but also contribute to the overall success of the team.</li>
  
  
  <li>Contribute to Open Source: I believe in the power of open-source collaboration. I aim to actively contribute to open-source projects, share my knowledge and expertise with the broader developer community, and give back to the community that has helped me grow as a developer.</li>
  
  <li>Impact Education: Ultimately, my goal is to make a positive impact on education through technology. Whether it's improving the efficiency of administrative tasks, enhancing the accessibility of educational resources, or creating interactive learning experiences, I want to use my skills as a web developer to empower educators and students alike.</li>
</ul>
      </Tab>
      <Tab eventKey="job" title="My Skill Set for the Job">
        <h1 className='header'>Do you currently have the skillsets for the job?</h1>
        <ul className='my-3 textColor' >
          <li>I would need 2 years of experience working as a web developer</li>
          <li>I would need to learn more skills lie backbone.js</li>
        </ul>
      </Tab>
    </Tabs>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default CodeStackPageComponent
