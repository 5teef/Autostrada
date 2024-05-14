import { MdMailOutline, MdOutlinePhoneIphone } from 'react-icons/md';
import '../Kontakt.css';

// Create the `Kontakt` component
export default function Kontakt() {
  return (
    <div className="kontakt-container">
      <a href="tel:010-6600628" className="kontakt-kolumn">
        <div className="kolumn-titel">
          <MdOutlinePhoneIphone className='kontakt-ikon' />
          <h3>010-660 06 28</h3>
        </div>
        <p className='kolumn-text'>Mån-fre 12:00-18:00<br />Lördag 10:00-16:00</p>
      </a>
      <a href="mailto:info@autostrada.nu" className="kontakt-kolumn">
        <div className="kolumn-titel">
          <MdMailOutline className='kontakt-ikon' />
          <h3>Maila</h3>
        </div>
        <p className='kolumn-text'>
          Just nu är chatten stängd, men du kan
          maila oss så guidar vi dig genom bilköpet!
        </p>
      </a>
    </div>
  );
}
