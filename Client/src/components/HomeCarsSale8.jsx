import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Left from "/img/left.png";

export default function CarsEight() {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <>
      <Container>
        <Row className="careight-container">
          {/* Bil 1 */}
          <Col xs={12} sm={6} md={4} className="car-section">
            <Link to="/car/BMW-M550-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
              <img src="/Autostrada/cars/BMW-550.jpg" alt="BMW M550-d xDrive Touring Ultimate Edition FULLUTRUSTAD" className="car-image img-fluid" />
              <div className="car">
                <h2>BMW M550-d xDrive Touring Ultimate Edition FULLUTRUSTAD</h2>
                <div><p className="cartext">Massagesäten, M-sportpaket, Bower & Wilkins High End Surround-ljudsystem, Head-Up Display</p></div>
              </div>
            </Link>
            <Row className="car-info justify-content-space-between" >
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carprice text-nowrap">{formatPrice(469900)} SEK</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="caryear text-nowrap">2021</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carmile text-nowrap">6100 mil</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="cargear text-nowrap">Automat</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carbransle text-nowrap">Bensin</p></div>
              </Col>
            </Row>
            <div className="line-separator-car">
              <img src={Left} alt="line" />
            </div>
          </Col>

          {/* Bil 2 */}
          <Col xs={12} sm={6} md={4} className="car-section">
            <Link to="/car/BMW-M550-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
              <img src="/Autostrada/cars/BMW-550.jpg" alt="BMW M550-d xDrive Touring Ultimate Edition FULLUTRUSTAD" className="car-image img-fluid" />
              <div className="car">
                <h2>BMW M550-d xDrive Touring Ultimate Edition FULLUTRUSTAD</h2>
                <div><p className="cartext">Massagesäten, M-sportpaket, Bower & Wilkins High End Surround-ljudsystem, Head-Up Display</p></div>
              </div>
            </Link>
            <Row className="car-info justify-content-space-between" >
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carprice text-nowrap">{formatPrice(469900)} SEK</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="caryear text-nowrap">2021</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carmile text-nowrap">6100 mil</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="cargear text-nowrap">Automat</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carbransle text-nowrap">Bensin</p></div>
              </Col>
            </Row>
            <div className="line-separator-car">
              <img src={Left} alt="line" />
            </div>
          </Col>

          {/* Bil 3 */}
          <Col xs={12} sm={6} md={4} className="car-section">
            <Link to="/car/BMW-M550-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
              <img src="/Autostrada/cars/BMW-550.jpg" alt="BMW M550-d xDrive Touring Ultimate Edition FULLUTRUSTAD" className="car-image img-fluid" />
              <div className="car">
                <h2>BMW M550-d xDrive Touring Ultimate Edition FULLUTRUSTAD</h2>
                <div><p className="cartext">Massagesäten, M-sportpaket, Bower & Wilkins High End Surround-ljudsystem, Head-Up Display</p></div>
              </div>
            </Link>
            <Row className="car-info justify-content-space-between" >
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carprice text-nowrap">{formatPrice(469900)} SEK</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="caryear text-nowrap">2021</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carmile text-nowrap">6100 mil</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="cargear text-nowrap">Automat</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carbransle text-nowrap">Bensin</p></div>
              </Col>
            </Row>
            <div className="line-separator-car">
              <img src={Left} alt="line" />
            </div>
          </Col>

          {/* Bil 4 */}
          <Col xs={12} sm={6} md={4} className="car-section">
            <Link to="/car/BMW-M550-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
              <img src="/Autostrada/cars/BMW-550.jpg" alt="BMW M550-d xDrive Touring Ultimate Edition FULLUTRUSTAD" className="car-image img-fluid" />
              <div className="car">
                <h2>BMW M550-d xDrive Touring Ultimate Edition FULLUTRUSTAD</h2>
                <div><p className="cartext">Massagesäten, M-sportpaket, Bower & Wilkins High End Surround-ljudsystem, Head-Up Display</p></div>
              </div>
            </Link>
            <Row className="car-info justify-content-space-between" >
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carprice text-nowrap">{formatPrice(469900)} SEK</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="caryear text-nowrap">2021</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carmile text-nowrap">6100 mil</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="cargear text-nowrap">Automat</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carbransle text-nowrap">Bensin</p></div>
              </Col>
            </Row>
            <div className="line-separator-car">
              <img src={Left} alt="line" />
            </div>
          </Col>

          {/* Bil 5 */}
          <Col xs={12} sm={6} md={4} className="car-section">
            <Link to="/car/BMW-M550-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
              <img src="/Autostrada/cars/BMW-550.jpg" alt="BMW M550-d xDrive Touring Ultimate Edition FULLUTRUSTAD" className="car-image img-fluid" />
              <div className="car">
                <h2>BMW M550-d xDrive Touring Ultimate Edition FULLUTRUSTAD</h2>
                <div><p className="cartext">Massagesäten, M-sportpaket, Bower & Wilkins High End Surround-ljudsystem, Head-Up Display</p></div>
              </div>
            </Link>
            <Row className="car-info justify-content-space-between" >
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carprice text-nowrap">{formatPrice(469900)} SEK</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="caryear text-nowrap">2021</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carmile text-nowrap">6100 mil</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="cargear text-nowrap">Automat</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carbransle text-nowrap">Bensin</p></div>
              </Col>
            </Row>
            <div className="line-separator-car">
              <img src={Left} alt="line" />
            </div>
          </Col>

          {/* Bil 6 */}
          <Col xs={12} sm={6} md={4} className="car-section">
            <Link to="/car/BMW-M550-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
              <img src="/Autostrada/cars/BMW-550.jpg" alt="BMW M550-d xDrive Touring Ultimate Edition FULLUTRUSTAD" className="car-image img-fluid" />
              <div className="car">
                <h2>BMW M550-d xDrive Touring Ultimate Edition FULLUTRUSTAD</h2>
                <div><p className="cartext">Massagesäten, M-sportpaket, Bower & Wilkins High End Surround-ljudsystem, Head-Up Display</p></div>
              </div>
            </Link>
            <Row className="car-info justify-content-space-between" >
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carprice text-nowrap">{formatPrice(469900)} SEK</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="caryear text-nowrap">2021</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carmile text-nowrap">6100 mil</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="cargear text-nowrap">Automat</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carbransle text-nowrap">Bensin</p></div>
              </Col>
            </Row>
            <div className="line-separator-car">
              <img src={Left} alt="line" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}


/*

    import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Left from "/img/left.png";

export default function CarsEight() {
  const [cars, setItems] = useState([]);

  useEffect(() => {
    async function loadCars() {
      try {
        const response = await fetch("/api/CarsEight");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }
    loadCars();
  }, []);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <>
    <Container>
      <Row className="careight-container">
        {cars.map(car => (
          <Col key={car.slug} xs={12} sm={6} md={4} className="car-section">
            <Link to={{ pathname: `/car/${car.slug}` }} style={{ textDecoration: 'none' }}>
              <img src={car.img} alt={car.title} className="car-image img-fluid" />
              <div className="car">
                <h2>{car.title}</h2>
                <div><p className="cartext">{car.undertitle}</p></div>
              </div>
            </Link>
            <Row className="car-info justify-content-space-between" >
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carprice text-nowrap">{formatPrice(car.price)} SEK</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="caryear text-nowrap">{car.year}</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carmile text-nowrap">{car.mil} mil</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="cargear text-nowrap">{car.vaxel}</p></div>
              </Col>
              <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                <div><p className="carbransle text-nowrap">{car.bransle}</p></div>
              </Col>
            </Row>
            <div className="line-separator-car">
              <img src={Left} alt="line" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    
    </>
  );
}

*/