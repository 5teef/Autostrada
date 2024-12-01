import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "./fordondetail.css"

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



  // Slider settings
// Slider settings
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false, // Disable navigation arrows
    lazyLoad: true,
  };
  
  

  return (
    <div className="car-details-container">
      <h1>{car.marke} {car.modell}</h1>
      <div className="car-detail-grid">
        <Slider {...sliderSettings}>
          {car.bilder && car.bilder.length > 0
            ? car.bilder.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`${car.marke} bild ${index + 1}`} className="car-image" />
                </div>
              ))
            : (
              <div>
                <img src="/placeholder.jpg" alt="Placeholder" className="car-image" />
              </div>
            )}
        </Slider>
        <div className="car-info-detail">
          <p><strong>Modellbeteckning:</strong> {car.modellbeteckning}</p>
          <p><strong>Utrustning:</strong> {car.utr}</p>
        </div>
      </div>
    </div>
  );
}
