import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faCalendarAlt, faGasPump, faCogs, faPalette, faTachometerAlt, faBolt, faCarSide, faIdCard } from '@fortawesome/free-solid-svg-icons';


import SeperatorLeft from "../Seperator/SeperatorSite_Left";
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

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setCurrentImageIndex(newIndex),
  };

  const images = car.bilder?.length > 0 ? car.bilder : ["/placeholder.jpg"];

  const parseUtr = (utrText) => {
    if (!utrText) return { description: null, equipment: null, compactEquipment: [] };

    // Extract description
    const descriptionMatch = utrText.match(/Nu har vi fått.*?(?=Utrustad med bland annat:)/s);
    const description = descriptionMatch ? descriptionMatch[0].trim() : null;

    // Extract equipment
    const equipmentMatch = utrText.match(/Utrustad med bland annat:(.*?)(?=AUTOSTRADA GRÄVMASKINSVÄGEN 5 I ESLÖV!)/s);
    const equipment = equipmentMatch
      ? equipmentMatch[1].split(/-\s*/).map((item) => item.trim()).filter(Boolean)
      : [];

    // Extract compact equipment
    const compactEquipmentMatch = utrText.match(/(12V-UTTAG.*)/s);
    const compactEquipment = compactEquipmentMatch
      ? compactEquipmentMatch[0]
        .split(/,\s*/)
        .map((item) => item.trim())
        .filter(Boolean)
      : [];

    return { description, equipment, compactEquipment };
  };

  const parsedUtr = parseUtr(car.utr);

  return (
    <div className="car-detail-grid">
      <h1>{`${car.marke} ${car.modell}  ${car.modellbeteckning}`}</h1>
      <SeperatorLeft />
      <div className="car-specification-section">
        <div className="slider-and-specs-container">

          <div className="slider-container">


            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`${car.marke} bild ${index + 1}`}
                    className="car-image"
                  />
                  <p className="image-counter-overlay">
                    {currentImageIndex + 1}/{images.length}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>


        <div className="specifications-container">
          <h2>Biluppgifter</h2>
          <div className="specifications-columns">
            <p>
              <FontAwesomeIcon icon={faTag} /> <strong>Pris:</strong> {car.begartpris.toLocaleString()} SEK
            </p>
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} /> <strong>Årsmodell:</strong> {car.amod}
            </p>
            <p>
              <FontAwesomeIcon icon={faTachometerAlt} /> <strong>Miltal:</strong> {car.mil} mil
            </p>
            <p>
              <FontAwesomeIcon icon={faPalette} /> <strong>Färg:</strong> {car.farg}
            </p>
            <p>
              <FontAwesomeIcon icon={faGasPump} /> <strong>Drivmedel:</strong> {car.drivmedel}
            </p>
            <p>
              <FontAwesomeIcon icon={faCogs} /> <strong>Växellåda:</strong> {car.vaxel}
            </p>
            <p>
              <FontAwesomeIcon icon={faBolt} /> <strong>Effekt:</strong> {car.effekthp} hk
            </p>
            <p>
              <FontAwesomeIcon icon={faCarSide} /> <strong>Kaross:</strong> {car.kaross}
            </p>
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} /> <strong>Registreringsår:</strong> {car.regyear}
            </p>
            <p>
              <FontAwesomeIcon icon={faIdCard} /> <strong>Registreringsnummer:</strong> {car.regnr}
            </p>
          </div>
        </div>

      </div>

      <div className="car-info-columns">
        <h2>
          Beskrivning
          <SeperatorLeft />
        </h2>
        <p>{parsedUtr.description || "Ingen beskrivning tillgänglig"}</p>

        <h2>
          Utrustning
          <SeperatorLeft />
        </h2>
        {parsedUtr.equipment.length > 0 ? (
          <ul>
            {parsedUtr.equipment.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>Ingen utrustningsinformation tillgänglig</p>
        )}

        <h2>
          All Utrustning
          <SeperatorLeft />
        </h2>
        {parsedUtr.compactEquipment.length > 0 ? (
          <div className="equipment-columns">
            {parsedUtr.compactEquipment.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        ) : (
          <p>Ingen komprimerad utrustning tillgänglig</p>
        )}
      </div>
    </div>
  );

}