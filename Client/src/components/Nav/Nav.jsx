import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <nav className="custom-nav">
      <ul className="nav-list">
        <li>
          <Link to="/">HEM</Link>
        </li>
        <li>
          <Link to="/fordon">FORDON I LAGER</Link>
        </li>
        <li>
          <Link to="/salj">SÄLJ DITT FORDON</Link>
        </li>
        <li>
          <Link to="/kontakt">KONTAKT</Link>
        </li>
      </ul>
    </nav>
  );
}
