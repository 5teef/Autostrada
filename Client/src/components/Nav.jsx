import { Link } from "react-router-dom"
export default function Nav() {

  return (
    <nav>
      <Link to="/" style={{ textDecoration: 'none' }}>HEM</Link>
      <Link to="fordon" style={{ textDecoration: 'none' }}>FORDON I LAGER</Link>
      <Link to="/" style={{ textDecoration: 'none' }}>SÄLJ DITT FORDON</Link>
      <Link to="games" style={{ textDecoration: 'none' }}>NYHETER</Link>
      <Link to="games" style={{ textDecoration: 'none' }}>KONTAKT</Link>
    </nav>
  )

}
