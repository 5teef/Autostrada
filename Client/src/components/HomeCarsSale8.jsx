import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Line from "/img/line.png";

export default function CarsEight() {
  const [cars, setItems] = useState([]);

  useEffect(() => {
    async function loadCars() {
      try {
        const response = await fetch("api/CarsEight");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }
    loadCars();
  }, []);

  return (
    <Container>
      <Row className="careight-container">
        {cars.map(car => (
          <Col key={car.slug} xs={12} sm={6} md={4} lg={4} xl={3} className="car-section"> {/* Tre kolumner på lg, xl skärmar */}
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
              <div className="line-separator-car">
                <img src={Line} alt={car.title} />
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
