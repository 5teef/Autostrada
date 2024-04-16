import Autostrada from "./LogoAutostrada"

export default function Header() {

  
  return (
    <div>

    <div className="line">
        <hr style={{ color: 'white', fontFamily: 'lato', fontSize: '3px', fontWeight: 200 }} />
    </div>

    <div className="footer">
      
      <div className="footer-autostrada-uc">
        <Autostrada />
        <p>Autostrada erbjuder bilentusiaster allt från nya bilar till begagnade och service. Hitta din drömbil med hjälp av vårt erfarna team.</p>
        <div className="uc">
          <img src="/img/uc.png" alt="Logo" />
          <img src="/img/uc.png" alt="Logo" />
        </div>
      </div>
      
    </div>
    <p className="trademark">© 2023 AUTOSTRADA</p>

    </div>
  )
}
