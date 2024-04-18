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

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
  <h1>Test</h1>
  );
}
