import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

export default function Nav() {
  return (
    <nav>
      <Container className="nav">
        <Row className="nav-row justify-content-center">
          <Col xs={12} sm={12} md="auto" lg="auto">
            <Link to="/Autostrada/" style={{ textDecoration: 'none' }}>HEM</Link>
          </Col>
          <Col xs={12} sm={12} md={12} lg="auto">
            <Link to="/Autostrada/fordon" style={{ textDecoration: 'none' }}>FORDON I LAGER</Link>
          </Col>
          <Col xs={12} sm={12} md={12} lg="auto">
            <Link to="/" style={{ textDecoration: 'none' }}>SÄLJ DITT FORDON</Link>
          </Col>
          <Col xs={12} sm={12} md={12} lg="auto">
            <Link to="/games" style={{ textDecoration: 'none' }}>NYHETER</Link>
          </Col>
          <Col xs={12} sm={12} md={12} lg="auto">
            <Link to="/games" style={{ textDecoration: 'none' }}>KONTAKT</Link>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}
