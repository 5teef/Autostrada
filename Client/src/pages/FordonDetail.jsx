import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../FordonDetail.css';
import Left from "/img/left.png";
import Right from "/img/right.png";
import { FaCar } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { BsPinMapFill } from "react-icons/bs";
import { BsCalculatorFill } from "react-icons/bs";
import UtrustningModal from "../components/UtrustningModal";
import Button from 'react-bootstrap/Button';
import Finansiering from "../components/Finans";
import Kontakt from "../components/KontaktaOss";

export default function ItemDetails() {
  const { slug } = useParams();
  const [car, setItem] = useState();
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    async function loadCars() {
      try {
        const response = await fetch("https://www.autostrada.nu/api/cars.php");
        const data = await response.json();
        const foundCar = data.find(car => car.slug === slug); // Använd find för att hitta objektet med matchande slug
        setItem(foundCar);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }
    loadCars();
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolla till toppen när item uppdateras
  }, [car]);

  if (!car) {
    return null;
  }

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const descriptions = car.description.split(",");


  // Ersätter alla lodräta streck med mellanslag
  const formattedName = car.name.replace(/\|/g, ' ');

  return (
    <>
    <div className="car-container">
        <div className="title">
          <h2>{formattedName}</h2>
          <img src={Left} alt="Left-Seperator" />
        </div>

        <div className="details" >
          <div className="car-image-details">
            <img src={"/images/" + car.photo} alt={car.photo} ></img>
          </div>
          
          <div className="company-info">

            <div className="price" >
              <h2>{formatPrice(car.price)} SEK</h2>
            </div>

            <div className="eslov">
              <h3><b>Eslöv</b></h3>
              <h4>Grävmaskinsvägen 5</h4>
            </div>  

            <div className="info-wrapper">


              <div className="info">
                <FaCar /> <h4>Boka provkörning</h4>
              </div>  

              <div className="info">
                <BsTelephoneFill /> <h4>Ring säljare</h4>
              </div> 
  
              <div className="info">
                <BsPinMapFill /> <h4>Vägbeskrivning</h4>
              </div>

              <div className="info">
                <BsCalculatorFill /> <h4>Se finansiering</h4>
              </div>
          </div>

        </div>          
          
      </div>

      </div>


      <div className="car-details">
        
          <div className="utrustning">
            <h2><b>Utrustning</b></h2>
            <div className="title-seperator">
            <img src={Left} alt="line" />
            
            {descriptions.map((description, index) =>(
              <div className="test" key={index}>
                <h4>{description}</h4>
              </div>
            ))}

            <Button className="button" onClick={() => setModalShow(true)}>
              <b>Visa mer!</b>
            </Button>

            <UtrustningModal
              show={modalShow}
              utrustning={car.utrustning}
              onHide={() => setModalShow(false)}
            />

            </div>

          </div>

        <div className="modell">
          <h2><b>Modell</b></h2>
          <div className="title-seperator">
            <img src={Left} alt="line" />
            <h4>{car.modell}</h4>
          </div>
        </div>

        <div className="motor-vaxellada">
          <h2><b>Motor & Växellåda</b></h2>
          <div className="title-seperator">
            <img src={Left} alt="line" />
            <h4>{car.motor}</h4>
          </div>
        </div>




      </div>

      <div className="lineseperator">
        <img src={Right} alt="Left-Seperator" />
      </div>
      <Finansiering bilpris={car.price}/>
      <Kontakt />
      </>
  );
}
