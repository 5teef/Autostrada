import { useState, useRef, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../Finansiering.css';

function KontaktForm() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+46');
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
    } catch (error) {
      setModalContent('Något gick fel och vi kunde inte skicka ditt meddelande.');
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="finansiering-container">
        <h2>Kontakta Oss</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="finansiering-kolumner">
          <div className="finansiering-kolumn">
            <label>Namn:</label>
            <input type="text" name="name" placeholder="Ange ditt fullständiga namn" required />
          </div>
          <div className="finansiering-kolumn">
            <label>E-post:</label>
            <input type="email" name="email" placeholder="din.email@example.com" required />
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
            <input type="tel" name="phone" value={phoneNumber} onChange={handlePhoneInputChange} placeholder="T.ex. 0701234567" />
          </div>
          <div className="finansiering-kolumn full-width">
            <label>Meddelande:</label>
            <textarea name="message" placeholder="Skriv ditt meddelande här" rows="4" required></textarea>
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

export default KontaktForm;
