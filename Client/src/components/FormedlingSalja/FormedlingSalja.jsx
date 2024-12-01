import { useState, useRef, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Hero from '/img/salj.png';
import './formedlingsalja.css';

function SaljOchFormedling() {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCodes, setCountryCodes] = useState([]);
    const [selectedCountryCode, setSelectedCountryCode] = useState('+46');
    const [formType, setFormType] = useState('förmedling');
    const [carDetails, setCarDetails] = useState({
        regNumber: '',
        mileage: '',
        equipment: ''
    });
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
        value = value.replace(/[^\d+]/g, '');
        if (value.startsWith('0') && value.length > 1) {
            value = selectedCountryCode + value.slice(1);
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
            <div className='salj-formedling-image'>
                <img src={Hero} alt="Sälj din bil" />
            </div>

            <div className='hero-intro'>
                <h2 style={{ color: 'white', marginTop: '50px', marginBottom: '20px' }}>
                    {stylizeFirstWord('Sälj eller förmedla din bil hos Autostrada')}
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
            </div>


            <div className="salj-formedling-container">


                <h2>Sälj eller förmedla din bil hos Autostrada</h2>

                <form ref={formRef} onSubmit={handleSubmit} className="salj-formedling-kolumner">
                    <div className="salj-formedling-kolumn full-width">
                        <label>Jag vill:</label>
                        <select value={formType} onChange={(e) => setFormType(e.target.value)} className="form-control" required>
                            <option value="förmedling">Förmedla</option>
                            <option value="sälja">Sälja min bil</option>
                        </select>
                    </div>

                    {formType === 'sälja' && (
                        <div className="salj-formedling-kolumn">
                            <label>Bilens regnummer:</label>
                            <input
                                type="text"
                                name="regNumber"
                                value={carDetails.regNumber}
                                onChange={(e) => setCarDetails({ ...carDetails, regNumber: e.target.value })}
                                placeholder="Ange bilens regnummer"
                                required
                                className="form-control"
                            />
                        </div>
                    )}

                    <div className="salj-formedling-kolumn">
                        <label>Nuvarande mätarställning:</label>
                        <input
                            type="number"
                            name="mileage"
                            value={carDetails.mileage}
                            onChange={(e) => setCarDetails({ ...carDetails, mileage: e.target.value })}
                            placeholder="Ange nuvarande mätarställning"
                            required
                            className="form-control"
                        />
                    </div>

                    <div className="salj-formedling-kolumn full-width">
                        <label>Utrustning som är bra att veta:</label>
                        <textarea
                            name="equipment"
                            value={carDetails.equipment}
                            onChange={(e) => setCarDetails({ ...carDetails, equipment: e.target.value })}
                            placeholder="Ange utrustning som är bra att veta"
                            rows="4"
                            required
                            className="form-control"
                        ></textarea>
                    </div>

                    <div className="salj-formedling-kolumn">
                        <label>Namn:</label>
                        <input type="text" name="name" placeholder="Ange ditt fullständiga namn" required className="form-control" />
                    </div>
                    <div className="salj-formedling-kolumn">
                        <label>E-post:</label>
                        <input type="email" name="email" placeholder="din.email@example.com" required className="form-control" />
                    </div>
                    <div className="salj-formedling-kolumn">
                        <label>Landskod:</label>
                        <select value={selectedCountryCode} onChange={(e) => setSelectedCountryCode(e.target.value)} className="form-control" required>
                            {countryCodes.map((country, index) => (
                                <option key={index} value={country.code}>{country.name} ({country.code})</option>
                            ))}
                        </select>
                    </div>
                    <div className="salj-formedling-kolumn">
                        <label>Telefonnummer:</label>
                        <input type="tel" name="phone" value={phoneNumber} onChange={handlePhoneInputChange} placeholder="T.ex. 0701234567" required className="form-control" />
                    </div>
                    <div className="salj-formedling-kolumn full-width">
                        <label>Meddelande:</label>
                        <textarea name="message" placeholder="Skriv ditt meddelande här" rows="4" required className="form-control"></textarea>
                    </div>
                    <div className="salj-formedling-kolumn">
                        <button type="submit" className="salj-formedling-submit-button">Skicka</button>
                    </div>
                </form>

                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Meddelande Status</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{modalContent}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>Stäng</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default SaljOchFormedling;
