import salj from "/img/salj.png";
import FormedlingSalja from "../components/FormedlingSalja";
import '../Salj.css'; // Importera CSS-filen
import Button from 'react-bootstrap/Button';


export default function Salj() {

  // Funktion för att separera och styla det första ordet
  const stylizeFirstWord = (text) => {
    const index = text.indexOf(' ');
    const firstWord = text.slice(0, index);
    const restText = text.slice(index);

    return (
      <>
        <span style={{ color: '#0fffff', fontWeight: '600' }}>{firstWord}</span>
        {restText}
      </>
    );
  };

  return (
    <div className="salj-container">
      <img src={salj} alt="Salj" className="salj-image" />

      <h2 style={{ color: 'white', marginTop: '50px', marginBottom: '20px' }}>
        {stylizeFirstWord('Sälj ditt fordon hos Autostrada')}
      </h2>

      <p style={{ color: 'white', marginBottom: '10px' }}>
        Sälj din bil snabbt och enkelt hos Autostrada. Vi förstår vikten av ett tryggt och lönsamt bilköp. Vår expertis och årliga erfarenhet gör oss till ett självklart val för tusentals bilägare varje år.
      </p>

      <p style={{ color: 'white', marginBottom: '10px' }}>
        Vår bilvärdering är kostnadsfri och du kan få en värdering direkt online, över telefon, eller personligen på någon av våra anläggningar, öppna alla dagar i veckan. Du får svar vanligtvis inom tre timmar, och vi garanterar en smidig och bekymmersfri försäljningsprocess.
      </p>

      <h2 style={{ color: 'white', marginTop: '50px', marginBottom: '20px' }}>
        {stylizeFirstWord('Låt Autostrada förmedla din bil')}
      </h2>

      <p style={{ color: 'white', marginBottom: '10px' }}>
        Vid sidan av att köpa din bil direkt, erbjuder Autostrada också en förmedlingstjänst där vi tar hand om hela försäljningsprocessen för dig. Denna tjänst är idealisk för dig som vill maximera försäljningsvärdet utan att behöva hantera den tidskrävande processen själv.
      </p>

      <p style={{ color: 'white', marginBottom: '10px' }}>
        Vi står för marknadsföring, visningar, och förhandlingar, samtidigt som vi erbjuder finansieringshjälp till potentiella köpare. Allt för att du ska kunna göra en trygg och lönsam affär.
      </p>
      <div className="button-div">
          <Button className="button" variant="secondary" size="lg" style={{ textDecoration: 'none' }}>
            Kontakta oss!
          </Button>
      </div>

      <FormedlingSalja />

    </div>
  );
}
