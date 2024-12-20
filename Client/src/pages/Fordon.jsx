import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Fordon() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function loadCars() {
      try {
        const response = await fetch("http://localhost:3001/api/cars");
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }
    loadCars();
  }, []);

  const formatPrice = (price) => {
    return price ? price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : "Ej angivet";
  };

  const filteredCars = cars.filter(car => car.bilder && car.bilder.length > 0);

  return (
    <div className="fordon-container">
      <div className="car-grid">
        {filteredCars.map(car => (
          <div key={car.regnr} className="car-item">
            <Link to={`/Autostrada/fordon/${car.regnr}`} style={{ textDecoration: 'none' }}>
              <img
                src={car.bilder[0]}
                alt={car.marke}
                className="car-image"
              />
              <div className="car">
                <h2>{car.marke} {car.modell}</h2>
                <p className="cartext">{car.modellbeteckning}</p>
              </div>
            </Link>
            <div className="car-info">
              <p>{formatPrice(car.begartpris)} SEK</p>
              <p>{car.amod}</p>
              <p>{car.mil} mil</p>
              <p>{car.vaxel}</p>
              <p>{car.drivmedel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
