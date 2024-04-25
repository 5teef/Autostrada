import { Container, Row, Col } from 'react-bootstrap';
import Autostrada from "./LogoAutostrada";
import UClogo from "../../public/img/uc.png";
import Bisnode from "../../public/img/bisnode.png";
import GoogleMapComponent from './GoogleMaps.jsx';


export default function Footer() {
  return (
    <>
    <hr style={{ color: 'white', fontFamily: 'lato', fontSize: '3px', fontWeight: 200 }} />
    <Container fluid>
      <Autostrada />
      <Row className="footer justify-content-evenly">
        <Col xs={6} lg={6} className="footer-autostrada-uc">
          <p>Autostrada erbjuder bilentusiaster allt från nya bilar till begagnade och service. Hitta din drömbil med hjälp av vårt erfarna team.</p>
          <div className="uc"> {/* Lägg till klasser för centrerad flex */}
            <img src={UClogo} alt="Logo" />
            <img src={Bisnode} alt="Logo" />
          </div>
        </Col>
        <GoogleMapComponent />  
        <h2>Grävmaskinsvägen 5 Eslöv 241 38</h2>

        <h2 id='oppetider'>Öppetider</h2>
        <div className='oppetider'>
          <div><p>Måndag-Fredag: 12:00 - 18:00</p></div>
          <div><p>Lördag: 11:00 - 16:00</p></div>
          <div><p>Söndag: Öppet vid bokning!</p></div>
        </div>
      </Row>



      <p className="trademark">© 2023 AUTOSTRADA</p>
    </Container>
    </>
  );
}
