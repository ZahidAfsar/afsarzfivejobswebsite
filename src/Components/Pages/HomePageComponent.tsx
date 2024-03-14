import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AdobePng from '../Assets/Adobe-logo.png'
import DiscordPng from '../Assets/Discord-logo.png'
import CiscoPng from '../Assets/Cisco-Symbol.png'
import TeslaPng from '../Assets/images323.png'
import CodeStackPng from '../Assets/San_Joaquin_County_Office_of_Ed_Logo.png.webp'
import { Link, useNavigate } from 'react-router-dom';


function HomePageComponent() {


  const cardImages = [
    AdobePng,
    DiscordPng,
    CiscoPng,
    TeslaPng
  ]

  const pageLinks = [
    '/Adobe',
    '/Discord',
    '/Cisco',
    '/Tesla',
  ];

  const navigate = useNavigate();

  const handleImageClick = (idx: number) => {
    navigate(pageLinks[idx]);
  };

  return (
    <>
    <h1 className='text-center titleGray' >5 Jobs that Interest Me</h1>
    <Container className='my-4' >
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img onClick={() => handleImageClick(idx)} className='HomeImg p-2' variant="top" src={cardImages[idx]} />
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
     <Container className='my-4' >
     <Row xs={1} md={2} className="g-4 d-flex justify-content-center">
       {Array.from({ length: 1 }).map((_, idx) => (
         <Col key={idx}>
           <Card as={Link} to='/CodeStack' >
             <Card.Img className='HomeImgBottom p-2' variant="top" src={CodeStackPng} />
           </Card>
         </Col>
       ))}
     </Row>
     </Container>
     </>
  );
}

export default HomePageComponent;
