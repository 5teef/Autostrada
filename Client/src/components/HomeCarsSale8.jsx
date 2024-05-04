import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Left from "/img/left.png";
import Button from 'react-bootstrap/Button';

export default function CarsEight() {
  const [cars, setItems] = useState([]);

  useEffect(() => {
    async function loadCars() {
      try {
        const response = await fetch("https://www.autostrada.nu/api/cars.php");
        const data = await response.json();

        // Loopa igenom varje bilobjekt och splitta utrustningen till de första 10 värdena
        data.forEach(car => {
          car.description = car.description.split(' - ').slice(0, 4).join(' '); // Splitta och välj de första 10 värdena
        });


        setItems(data.slice(0, 8))
        console.log(data)
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }
    loadCars();
  }, []);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolla till toppen när cars uppdateras
  }, [cars]);

  return (
    <>
      <Container>
        <Row className="careight-container">
          {cars.map(car => (
            <Col key={car.slug} xs={12} sm={6} md={6} lg={4} xl={3} className="car-section">
              <Link to={{ pathname: `/Autostrada/fordon/${car.slug}` }} style={{ textDecoration: 'none' }}>
                <img src={"/Autostrada/cars/" + car.photo} alt={car.photo} className="car-image img-fluid" />
                <div className="car">
                  <h2>{car.name}</h2>
                  {<div><p className="cartext">{car.description}</p></div>}
                </div>
              </Link>
              <Row className="car-info justify-content-space-between" >
                <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                  <div><p className="carprice text-nowrap">{formatPrice(car.price)} SEK</p></div>
                </Col>
                <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                  <div><p className="caryear text-nowrap">{car.artal}</p></div>
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

      <div className="morecars-div">
        <Link to="/Autostrada/fordon">
          <Button className="morecars" variant="secondary" size="lg" style={{ textDecoration: 'none' }}>
            Fler bilar!
          </Button>
        </Link>
      </div>

    </>
  );
}




/*
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Left from "/img/left.png";
import Button from 'react-bootstrap/Button';

export default function CarsEight() {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <>
      <Container>
        <Row className="careight-container">
          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="car-section">
            <Link to="/fordon/BMW-ff-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
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

          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="car-section">
            <Link to="/fordon/BMW-M550-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
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

          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="car-section">
            <Link to="/fordon/BMW-M550-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
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

          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="car-section">
            <Link to="/fordon/BMW-M550-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
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

          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="car-section">
            <Link to="/fordon/BMW-M550-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
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

          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="car-section">
            <Link to="/fordon/BMW-M550-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
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
      <div className="morecars-div">
        <Link to="/Autostrada/fordon">
        <Button className="morecars" variant="secondary" size="lg" style={{ textDecoration: 'none' }}>
          Fler bilar!
        </Button>
        </Link>
      </div>
    </>
  );
}

*/

/*

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Left from "/img/left.png";
import Button from 'react-bootstrap/Button';

export default function CarsEight() {
  const [cars, setItems] = useState([]);

  useEffect(() => {
    async function loadCars() {
      try {
        const response = await fetch("/api/cars");
        const data = await response.json();
        setItems(data.slice(0, 8));
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }
    loadCars();
  }, []);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolla till toppen när cars uppdateras
  }, [cars]);

  return (
    <>
      <Container>
        <Row className="careight-container">
          {cars.map(car => (
            <Col key={car.slug} xs={12} sm={6} md={6} lg={4} xl={3} className="car-section">
              <Link to={{ pathname: `/Autostrada/fordon/${car.slug}` }} style={{ textDecoration: 'none' }}>
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

      <div className="morecars-div">
        <Link to="/Autostrada/fordon">
          <Button className="morecars" variant="secondary" size="lg" style={{ textDecoration: 'none' }}>
            Fler bilar!
          </Button>
        </Link>
      </div>

    </>
  );
}



/*
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Left from "/img/left.png";
import Button from 'react-bootstrap/Button';

export default function CarsEight() {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <>
      <Container>
        <Row className="careight-container">
          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="car-section">
            <Link to="/fordon/BMW-ff-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
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

          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="car-section">
            <Link to="/fordon/BMW-M550-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
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

          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="car-section">
            <Link to="/fordon/BMW-M550-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
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

          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="car-section">
            <Link to="/fordon/BMW-M550-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
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

          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="car-section">
            <Link to="/fordon/BMW-M550-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
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

          <Col xs={12} sm={6} md={6} lg={4} xl={3} className="car-section">
            <Link to="/fordon/BMW-M550-d-xDrive-Touring-Ultimate-Edition-FULLUTRUSTAD" style={{ textDecoration: 'none' }}>
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
      <div className="morecars-div">
        <Link to="/Autostrada/fordon">
        <Button className="morecars" variant="secondary" size="lg" style={{ textDecoration: 'none' }}>
          Fler bilar!
        </Button>
        </Link>
      </div>
    </>
  );
}

*/

/*

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Left from "/img/left.png";

export default function CarsEight() {
  const [cars, setItems] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await fetch("api/CarsEight")
      const data = await response.json()
      console.log(data)
      setItems(data)
    }
    load()
  }, [])

  return (
    <div className="careight-container">
      {cars.map(car => (
          <Col key={car.slug} xs={12} sm={6} md={6} lg={4} xl={3} className="car-section">
                <Link to={{ pathname: `/car/${car.slug}` }} style={{ textDecoration: 'none' }}>
                  <img src={car.img} alt={car.title} className="car-image img-fluid" />
                  <div className="car">
                    <h2>{car.title}</h2>
                    <div><p className="cartext">{car.undertitle}</p></div>
                  </div>
                  <div className="car-info">
                    <div><p className="carprice">{car.price} SEK</p></div>
                    <div><p className="caryear">{car.year}</p></div>
                    <div><p className="carmile">{car.mil} mil</p></div>
                    <div><p className="cargear">{car.vaxel}</p></div>
                    <div><p className="carbransle">{car.bransle}</p></div>
                  </div>
                  <div className="line-seperator-car">
                    <img src={Line} alt={car.title} />
                  </div>
                </Link>



              </section>
        ))}
            </div>

            )
}

*/