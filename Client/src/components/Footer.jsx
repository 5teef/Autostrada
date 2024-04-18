import Autostrada from "./LogoAutostrada";
import UClogo from "../../public/img/uc.png";
import { Container, Row, Col } from 'react-bootstrap';

export default function Header() {
  return (
    <Container fluid>
      <div className="line">
        <hr style={{ color: 'white', fontFamily: 'lato', fontSize: '3px', fontWeight: 200 }} />
      </div>
      <Autostrada />
      <Row className="footer justify-content-evenly">
        <Col xs={6} lg={6} className="footer-autostrada-uc">
          <p>Autostrada erbjuder bilentusiaster allt från nya bilar till begagnade och service. Hitta din drömbil med hjälp av vårt erfarna team.</p>
          <div className="uc"> {/* Lägg till klasser för centrerad flex */}
            <img src={UClogo} alt="Logo" />
            <img src={UClogo} alt="Logo" />
          </div>
        </Col>
        <Col xs={6} lg={6} className="footer-autostrada-uc">
          <p>Autostrada erbjuder bilentusiaster allt från nya bilar till begagnade och service. Hitta din drömbil med hjälp av vårt erfarna team.</p>
          <div className="uc"> {/* Lägg till klasser för centrerad flex */}
            <img src={UClogo} alt="Logo" />
            <img src={UClogo} alt="Logo" />
          </div>
        </Col>

      </Row>
      <p className="trademark">© 2023 AUTOSTRADA</p>
    </Container>
  );
}
