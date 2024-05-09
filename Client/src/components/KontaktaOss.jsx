// Import the necessary CSS file and icons
import '../Kontakt.css';
import { MdMailOutline, MdOutlinePhoneIphone } from 'react-icons/md';

// Create the `Kontakt` component
export default function Kontakt() {
  return (
    <div className="kontakt-container">
      <div className="kontakt-kolumn">
        <div className="kolumn-titel">
          <MdOutlinePhoneIphone className='kontakt-ikon' />
          <h3>0720079292</h3>
        </div>
        <p className='kolumn-text'>Mån-fre 12:00-18:00<br />Lördag 10:00-16:00</p>
      </div>
      <div className="kontakt-kolumn">
        <div className="kolumn-titel">
          <MdMailOutline className='kontakt-ikon' />
          <h3>Maila</h3>
        </div>
        <p className='kolumn-text'>
          Just nu är chatten stängd, men du kan
          maila oss så guidar vi dig genom bilköpet!
        </p>
      </div>
    </div>
  );
}
