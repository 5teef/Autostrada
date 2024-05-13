import { useState, useRef, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../Finansiering.css';

function FormedlingSalja() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+46');
  const [formType, setFormType] = useState('förmedling'); // Lägg till en state för att hålla koll på vilken typ av form det är
  const [carDetails, setCarDetails] = useState({
    regNumber: '',
    mileage: '',
    equipment: ''
  });

  const formRef = useRef(null);

  useEffect(() => {
    async function fetchCountryCodes() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();
        const codes = countries.map(country => ({
          name: country.name.common,
          code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : "")
        }));
        setCountryCodes(codes);
      } catch (error) {
        console.error('Failed to fetch country codes:', error);
      }
    }
    fetchCountryCodes();
  }, []);

  const handlePhoneInputChange = (event) => {
    let value = event.target.value;
    value = value.replace(/[^\d+]/g, '');  // Tillåt bara siffror och plus-tecken
    if (value.startsWith('0') && value.length > 1) {
      value = selectedCountryCode + value.slice(1);  // Lägg till landskoden
    }
    setPhoneNumber(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('country_code', selectedCountryCode);
    formData.append('phone', phoneNumber);
    formData.append('form_type', formType);
    formData.append('regNumber', carDetails.regNumber);
    formData.append('mileage', carDetails.mileage);
    formData.append('equipment', carDetails.equipment);

    try {
      const response = await fetch('https://www.autostrada.nu/api/mail_handler.php', {
        method: 'POST',
        body: formData,
      });

      const text = await response.text();
      setModalContent(text);
      setShowModal(true);
      formRef.current.reset();
      setPhoneNumber('');
      setSelectedCountryCode('+46');
      setCarDetails({
        regNumber: '',
        mileage: '',
        equipment: ''
      });
    } catch (error) {
      setModalContent('Något gick fel och vi kunde inte skicka ditt meddelande.');
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="finansiering-container" style={{ width: '90%' }}>
        <h2>Förmedla eller sälj din bil smidigt med Autostrada!</h2>

        <form ref={formRef} onSubmit={handleSubmit} className="finansiering-kolumner">
          <div className="finansiering-kolumn full-width">
            <label>Jag vill:</label>
            <select value={formType} onChange={(e) => setFormType(e.target.value)} className="form-control">
              <option value="förmedling">Förmedla</option>
              <option value="sälja">Sälja min bil</option>
            </select>
          </div>

          <div className="finansiering-kolumn">
            <label>Nuvarande mätarställning:</label>
            <input
              type="number"
              name="mileage"
              value={carDetails.mileage}
              onChange={(e) => setCarDetails({ ...carDetails, mileage: e.target.value })}
              placeholder="Ange nuvarande mätarställning"
              required
              className="form-control" // Lägg till samma klass som de andra fälten
            />
          </div>

          <div className="finansiering-kolumn">
            <label>Utrustning som är bra att veta:</label>
            <textarea
              name="equipment"
              value={carDetails.equipment}
              onChange={(e) => setCarDetails({ ...carDetails, equipment: e.target.value })}
              placeholder="Ange utrustning som är bra att veta"
              rows="4"
              className="form-control"
            ></textarea>
          </div>

          {formType === 'förmedling' && (
            <>
              <div className="finansiering-kolumn full-width">
                <p>10 skäl att förmedla din bil via oss:</p>
                <ul>
                  <li>Professionell värdering av din bil</li>
                  <li>Bred marknadsföring för snabb försäljning</li>
                  <li>Säker och trygg affär från start till mål</li>
                  <li>Vi tar hand om all administration</li>
                  <li>Stort nätverk av potentiella köpare</li>
                  <li>Erfaren personal med gedigen kunskap</li>
                  <li>Hög transparens och inga dolda avgifter</li>
                  <li>Vi hjälper till med finansiering för köpare</li>
                  <li>Få maximalt värde för din bil</li>
                  <li>Vi erbjuder garanti på förmedlade bilar</li>
                </ul>
              </div>
            </>
          )}

          {formType === 'sälja' && (
            <>
              <div className="finansiering-kolumn full-width">
                <p>Kostnadsfri värdering i 3 olika steg</p>
                <ul>
                  <li>Vi köper in bilar som gått max 20 000 mil</li>
                  <li>Vi köper inte in bilar som är importerade</li>
                  <li>Vi betalar ut pengarna direkt till ditt konto</li>
                  <li>Vi hjälper till med finansiering</li>
                  <li>Vi hjälper dig med ägarbytet</li>
                  <li>Vi löser ditt billån och betalar ut ev mellanskillnad på ditt konto</li>
                  <li>Vi hjälper både privatkunder och företag</li>
                  <li>Vi har öppet alla dagar i veckan</li>
                </ul>
              </div>

              <div className="finansiering-kolumn">
                <label>Bilens regnummer:</label>
                <input
                  type="text"
                  name="regNumber"
                  value={carDetails.regNumber}
                  onChange={(e) => setCarDetails({ ...carDetails, regNumber: e.target.value })}
                  placeholder="Ange bilens regnummer"
                  required
                />
              </div>
            </>
          )}

          <div className="finansiering-kolumn">
            <label>Namn:</label>
            <input type="text" name="name" placeholder="Ange ditt fullständiga namn" required className="form-control" />
          </div>
          <div className="finansiering-kolumn">
            <label>E-post:</label>
            <input type="email" name="email" placeholder="din.email@example.com" required className="form-control" />
          </div>
          <div className="finansiering-kolumn">
            <label>Landskod:</label>
            <select value={selectedCountryCode} onChange={(e) => setSelectedCountryCode(e.target.value)} className="form-control">
              {countryCodes.map((country, index) => (
                <option key={index} value={country.code}>{country.name} ({country.code})</option>
              ))}
            </select>
          </div>
          <div className="finansiering-kolumn">
            <label>Telefonnummer:</label>
            <input type="tel" name="phone" value={phoneNumber} onChange={handlePhoneInputChange} placeholder="T.ex. 0701234567" className="form-control" />
          </div>
          <div className="finansiering-kolumn full-width">
            <label>Meddelande:</label>
            <textarea name="message" placeholder="Skriv ditt meddelande här" rows="4" required className="form-control"></textarea>
          </div>
          <div className="finansiering-kolumn">
            <button type="submit" className="submit-button">Skicka</button>
          </div>
        </form>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Meddelande Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" style={{ color: 'black' }} onClick={() => setShowModal(false)}>Stäng</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FormedlingSalja;
