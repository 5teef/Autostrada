import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faCalendarAlt,
  faGasPump,
  faPalette,
  faTachometerAlt,
  faBolt,
  faCarSide,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
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
        setCar(parseCarData(data));
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

  // Function to parse and structure the car data
  function parseCarData(car) {
    const description =
      car.utr?.match(/Nu har vi fått.*?(?=Utrustad med bland annat:)/s)?.[0]?.trim() ||
      "Ingen beskrivning tillgänglig";

    const equipmentMatch = car.utr?.match(
      /Utrustad med bland annat:(.*?)(?=AUTOSTRADA|$)/s
    )?.[1];

    const compactEquipmentMatch = car.utr?.match(/(12V-UTTAG.*)$/s)?.[0];

    const equipment = equipmentMatch
      ? equipmentMatch
        .split(/-\s*/)
        .map((item) => item.trim())
        .filter(Boolean)
      : [];

    const compactEquipment = compactEquipmentMatch
      ? compactEquipmentMatch
        .split(/,\s*/)
        .map((item) => item.trim())
        .filter(
          (item) =>
            !equipment.includes(item) && // Undvik dubbletter
            !/AUTOSTRADA|KOLLA ERAN SKRÄPPOST/.test(item) && // Ta bort reklam och irrelevanta texter
            Boolean(item)
        )
      : [];

    return {
      ...car,
      description,
      equipment,
      compactEquipment,
    };
  }




  const {
    bilder = ["/placeholder.jpg"],
    description,
    equipment,
    compactEquipment,
    marke,
    modell,
    modellbeteckning,
    begartpris,
    amod,
    mil,
    effekthp,
    farg,
    drivmedel,
    kaross,
    regnr,
  } = car;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (_, newIndex) => setCurrentImageIndex(newIndex),
  };

  return (
    <div className="car-detail-grid">
      <h1>{`${marke} ${modell} ${modellbeteckning}`}</h1>

      <div className="slider-and-specs-container">
        <div className="slider-container">
          <Slider {...sliderSettings}>
            {bilder.map((image, index) => (
              <div key={index} style={{ position: "relative" }}>
                <img
                  src={image}
                  alt={`${marke} bild ${index + 1}`}
                  className="car-image"
                />
                <div className="image-counter-overlay">
                  {currentImageIndex + 1}/{bilder.length}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="specifications-container">
          <h2>Biluppgifter</h2>
          <div className="specifications-columns">
            <div className="specification-column">
              <p>
                <FontAwesomeIcon icon={faTag} /> <strong>Pris:</strong> {begartpris.toLocaleString()} SEK
              </p>
              <p>
                <FontAwesomeIcon icon={faCalendarAlt} /> <strong>Årsmodell:</strong> {amod}
              </p>
              <p>
                <FontAwesomeIcon icon={faTachometerAlt} /> <strong>Miltal:</strong> {mil} mil
              </p>
              <p>
                <FontAwesomeIcon icon={faBolt} /> <strong>Effekt:</strong> {effekthp} hk
              </p>
            </div>
            <div className="specification-column">
              <p>
                <FontAwesomeIcon icon={faPalette} /> <strong>Färg:</strong> {farg}
              </p>
              <p>
                <FontAwesomeIcon icon={faGasPump} /> <strong>Drivmedel:</strong> {drivmedel}
              </p>
              <p>
                <FontAwesomeIcon icon={faCarSide} /> <strong>Kaross:</strong> {kaross}
              </p>
              <p>
                <FontAwesomeIcon icon={faIdCard} /> <strong>Regnr:</strong> {regnr}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="car-info-columns">
        <h2>Beskrivning</h2>
        <p>{description}</p>

        <h2>Utrustning</h2>
        {equipment.length > 0 ? (
          <ul>
            {equipment.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>Ingen utrustningsinformation tillgänglig</p>
        )}

        <h2>All Utrustning</h2>
        {compactEquipment.length > 0 ? (
          <div className="equipment-columns">
            {compactEquipment.map((item, index) => (
              <div key={index} className="equipment-item">
                {item}
              </div>
            ))}
          </div>
        ) : (
          <p>Ingen komprimerad utrustning tillgänglig</p>
        )}

      </div>
    </div>
  );
}
