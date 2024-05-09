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


        setItems(data)

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

