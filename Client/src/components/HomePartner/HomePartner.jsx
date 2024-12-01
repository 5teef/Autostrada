import Left from "/img/left.png";
import TwoVolvo from "/img/twovolvo.png";
import { Container, Row, Col } from 'react-bootstrap';
import "./homepartner.css"

export default function HomeContainer() {
  return (
    <div className="homecontainer">
      <Container fluid> {/* Använd fluid för att Container ska sträcka sig hela vägen */}
        <Row>
          <Col xs={12} sm={12} md={12} lg={4}>
            <div className="homepartner">
              <div className="lineseperator-home">
                <img src={Left} alt="Lineseperator" />
              </div>
              <h2>Din partner för exklusiv bilupplevelse</h2>
              <p>Autostrada är en återförsäljare av exklusiva bilar som erbjuder en unik kundupplevelse genom sin långa erfarenhet, kunskap och pålitlighet inom branschen, samt ett handplockat utbud av de mest eftertraktade bilmodellerna från världens ledande bilmärken.</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={8}>
            <div className="twovolvo d-flex justify-content-end">
              <img src={TwoVolvo} alt="TwoVolvos" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
