import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import SeperatorLeft from "../Seperator/SeperatorSite_Left";
import "./fordondetail.css";

export default function FordonDetail() {
  const { slug } = useParams();
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false); // State to track if it's a mobile screen

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if screen width is less than or equal to 768px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setCurrentImageIndex(newIndex),
  };

  const images = car.bilder?.length > 0 ? car.bilder : ["/placeholder.jpg"];

  const parseUtr = (utrText) => {
    if (!utrText) return { description: null, equipment: null, compactEquipment: [] };

    const descriptionMatch = utrText.match(/Nu har vi fått.*?(?=Utrustad med bland annat:)/s);
    const description = descriptionMatch ? descriptionMatch[0].trim() : null;

    const equipmentMatch = utrText.match(/Utrustad med bland annat:(.*?)(?=AUTOSTRADA GRÄVMASKINSVÄGEN 5 I ESLÖV!)/s);
    const equipment = equipmentMatch
      ? equipmentMatch[1].split(/-\s*/).map((item) => item.trim()).filter(Boolean)
      : [];

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

  const handleImageClick = (image) => {
    if (isMobile) { // Open modal only for mobile screens
      setModalImage(image);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="car-detail-grid">
      <div className="car-specification-section">
        <div className="slider-container">
          <h1>{`${car.marke} ${car.modellbeteckning}`}</h1>
          <SeperatorLeft />
          <p className="image-counter-overlay">
            {currentImageIndex + 1}/{images.length}
          </p>
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index} onClick={() => handleImageClick(image)}>
                <img
                  src={image}
                  alt={`${car.marke} bild ${index + 1}`}
                  className="car-image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImage} alt="Fullscreen" className="fullscreen-image" />
          </div>
        </div>
      )}

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
