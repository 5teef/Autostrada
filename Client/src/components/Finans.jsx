import { useState, useEffect, useRef } from 'react';
import '../Finansiering.css'; // Importera CSS-filen
import PropTypes from 'prop-types';

export default function Finansiering({ bilpris }) {
  const [pris, setPris] = useState(bilpris);
  const [manader, setManader] = useState(72);
  const [ranta, setRanta] = useState(9.95);

  const minPris = 50000;
  const maxPris = 1200000;
  const minManader = 12;
  const maxManader = 144;
  const minRanta = 7.95;
  const maxRanta = 12.95;

  const prisRef = useRef();
  const manaderRef = useRef();
  const rantaRef = useRef();

  useEffect(() => {
    updateSliderBackground(prisRef.current);
    updateSliderBackground(manaderRef.current);
    updateSliderBackground(rantaRef.current);
  }, []);

  const updateSliderBackground = (slider) => {
    const min = slider.min;
    const max = slider.max;
    const val = slider.value;

    slider.style.setProperty('--value', ((val - min) / (max - min)) * 100 + '%');
  };

  const beraknaManadligBetalning = (pris, manader, ranta) => {
    const manadligRanta = ranta / 100 / 12;
    const betalning = (pris * manadligRanta) / (1 - (1 + manadligRanta) ** -manader);
    return betalning.toFixed(2);
  };

  const manadligBetalning = beraknaManadligBetalning(pris, manader, ranta);

  return (
    <>
      <div className="finans-text">
        <h2>Finansiering och försäkring</h2>
        <p>
          Köper du begagnad bil från vårt lager? Vi hjälper dig med finansieringen. Autostrada samarbetar med Wasa
          Kredit, Mymoney och Money Go för bästa möjliga billån.
        </p>
      </div>
      <div className="finansiering-container">
        <h2>Finansiering för bil</h2>
        <div className="finansiering-kolumner">
          {/* Bilpris */}
          <div className="finansiering-kolumn">
            <label>Bilpris: {pris} kr</label>
            <input
              ref={prisRef}
              className="slider"
              type="range"
              min={minPris}
              max={maxPris}
              step={1000}
              value={pris}
              onChange={(e) => {
                setPris(Number(e.target.value));
                updateSliderBackground(prisRef.current);
              }}
            />
          </div>

          {/* Månader */}
          <div className="finansiering-kolumn">
            <label>Antal månader: {manader}</label>
            <input
              ref={manaderRef}
              className="slider"
              type="range"
              min={minManader}
              max={maxManader}
              step={1}
              value={manader}
              onChange={(e) => {
                setManader(Number(e.target.value));
                updateSliderBackground(manaderRef.current);
              }}
            />
          </div>

          {/* Ränta */}
          <div className="finansiering-kolumn">
            <label>Ränta (%): {ranta}</label>
            <input
              ref={rantaRef}
              className="slider"
              type="range"
              min={minRanta}
              max={maxRanta}
              step={0.01}
              value={ranta}
              onChange={(e) => {
                setRanta(Number(e.target.value));
                updateSliderBackground(rantaRef.current);
              }}
            />
          </div>
        </div>

        {/* Månatlig betalning */}
        <div className="manadlig-betalning">
          <h3>Månads betalning: {manadligBetalning} kr</h3>
        </div>
      </div>
    </>
  );
}

Finansiering.propTypes = {
  bilpris: PropTypes.number
}