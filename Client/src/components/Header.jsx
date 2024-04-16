import { Link } from "react-router-dom"
import { FaRegClock } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

export default function Header() {

  const day = new Date().getDay();

  const oppetider = () => {
    switch (day) {
      case 1: // Måndag
        return "12:00 - 18:00";
      case 2: // Tisdag
        return "12:00 - 18:00";
      case 3: // Onsdag
        return "12:00 - 18:00";
      case 4: // Torsdag
        return "12:00 - 18:00";
      case 5: // Fredag
        return "12:00 - 18:00";
      case 6: // Lördag
        return "10:00 - 16:00";
      default: // Söndag
        return "Öppet vid tidsbokningar!";
    }
  };
  

  return (
    <div>
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}> <FaRegClock /> {oppetider()}</Link>
      <Link to="https://www.instagram.com/autostrada.nu/" style={{ textDecoration: 'none' }}><FaInstagram /> autostrada.nu</Link>
      <Link to="mailto:info@autostrada.nu" style={{ textDecoration: 'none' }}><MdMailOutline /> info@autostrada.nu</Link>
        <Link to="#" style={{ textDecoration: 'none' }}> <CiPhone /> +4672 - 00 79 292</Link>
    </div>

    <div className="line">
        <hr style={{ color: 'white', fontFamily: 'lato', fontSize: '3px', fontWeight: 200 }} />
    </div>
    </div>
  )
}
