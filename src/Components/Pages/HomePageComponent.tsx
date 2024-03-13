import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AdobePng from '../Assets/Adobe-logo.png'

function HomePageComponent() {

  const cardTexts = [
    "This is the text for the first card.",
    "This is the text for the second card.",
    "This is the text for the third card.",
    "This is the text for the fourth card."
  ];

  return (
    <>
    <Container className='my-4' >
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={AdobePng} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>{cardTexts[idx]}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
     <Container className='my-4' >
     <Row xs={1} md={2} className="g-4 d-flex justify-content-center">
       {Array.from({ length: 1 }).map((_, idx) => (
         <Col key={idx}>
           <Card>
             <Card.Img variant="top" src="holder.js/100px160" />
             <Card.Body>
               <Card.Title>Card title</Card.Title>
               <Card.Text>
                 This is a longer card with supporting text below as a natural
                 lead-in to additional content. This content is a little bit
                 longer.
               </Card.Text>
             </Card.Body>
           </Card>
         </Col>
       ))}
     </Row>
     </Container>
     </>
  );
}

export default HomePageComponent;
