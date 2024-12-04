import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "./fordondetail.css";

export default function FordonDetail() {
  const { slug } = useParams();
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!slug) {
      setError("Registreringsnummer saknas.");
      return;
    }

    async function fetchCarDetails() {
      try {
        const response = await fetch(`http://localhost:3001/api/cars/${slug}`);
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

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
    lazyLoad: false,
    accessibility: true,
    waitForAnimate: false,
    fade: true,
    beforeChange: (oldIndex, newIndex) => setCurrentImageIndex(newIndex),
  };

  const images = car.bilder?.length > 0 ? car.bilder : ["/placeholder.jpg"];

  return (
    <div className="car-detail-grid">
  <div className="slider-container">
    <p className="image-counter-overlay">
      {currentImageIndex + 1}/{images.length}
    </p>
    <Slider {...sliderSettings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`${car.marke} bild ${index + 1}`}
            className="car-image"
          />
        </div>
      ))}
    </Slider>
  </div>
  <div className="car-info-detail">
    <p>
      <strong>Utrustning:</strong> {car.utr}
    </p>
  </div>
</div>

  );
}
