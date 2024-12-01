import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function FordonDetail() {
  const { slug } = useParams();
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setError("Registreringsnummer saknas.");
      return;
    }

    async function fetchCarDetails() {
      try {
        const response = await fetch(`/api/cars/${slug}`);
        if (!response.ok) {
          throw new Error("Car not found");
        }
        const data = await response.json();
        setCar(data);
      } catch (err) {
        console.error("Error fetching car details:", err);
        setError(err.message);
      }
    }

    fetchCarDetails();
  }, [slug]);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!car) {
    return <p>Loading...</p>;
  }

  return (
    <div className="car-details-container">
      <h1>{car.marke} {car.modell}</h1>
      <div className="car-detail-grid">
        <img
          src={car.bilder && car.bilder.length > 0 ? car.bilder[0] : '/placeholder.jpg'}
          alt={car.marke}
          className="car-image"
        />
        <div className="car-info">
          <p><strong>Modellbeteckning:</strong> {car.modellbeteckning}</p>
          <p><strong>Utrustning:</strong> {car.utr}</p>
        </div>
      </div>
    </div>
  );
}
