import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { Container, Row, Col } from 'react-bootstrap';

export default function Header() {

  const day = new Date().getDay();

  const oppetider = () => {
    switch (day) {
      case 1: // Måndag
        return "12:00 - 18:00";
      case 2: // Tisdag
        return "12:00 - 18:00";
      case 3: // Onsdag
        return "12:00 - 18:00";
      case 4: // Torsdag
        return "12:00 - 18:00";
      case 5: // Fredag
        return "12:00 - 18:00";
      case 6: // Lördag
        return "10:00 - 16:00";
      default: // Söndag
        return "Öppet vid tidsbokningar!";
    }
  };

  return (
    <div>
      <Container fluid>
        <Row className="header  justify-content-sm-around justify-content-lg-around">
          <Col xs={12} sm={6} md="auto" lg="auto">
            <Link to="/Autostrada" style={{ textDecoration: 'none' }}> <FaRegClock /> {oppetider()}</Link>
          </Col>
          <Col xs={12} sm={6} md="auto" lg="auto">
            <Link to="https://www.instagram.com/autostrada.nu/" style={{ textDecoration: 'none' }}><FaInstagram /> autostrada.nu</Link>
          </Col>
          <Col xs={12} sm={6} md="auto" lg="auto">
            <Link to="mailto:info@autostrada.nu" style={{ textDecoration: 'none' }}><MdMailOutline /> info@autostrada.nu</Link>
          </Col>
          <Col xs={12} sm={6} md="auto" lg="auto">
            <Link to="tel:+4672-0079292" style={{ textDecoration: 'none' }}> <CiPhone /> +4672 - 00 79 292</Link>
          </Col>
        </Row>
      </Container>
      <hr style={{ color: 'white', fontFamily: 'lato', fontSize: '3px', fontWeight: 200 }} />
    </div>
  )
}
