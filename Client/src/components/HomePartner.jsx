import Line from "/img/line.png"
import TwoVolvo from "/img/twovolvo.png"

export default function HomeContainer() {
  return (
    <div className="homecontainer">
      <div className="twovolvo">
        <img src={TwoVolvo} alt="TwoVolvos" />
      </div>
      <div className="homepartner">
        <div className="lineseperator">
          <img src={Line} alt="Lineseperator" />
        </div>
        <h2>Din partner för exklusiv bilupplevelse</h2>
        <p>Autostrada är en återförsäljare av exklusiva bilar som erbjuder en unik kundupplevelse genom sin långa erfarenhet, kunskap och pålitlighet inom branschen, samt ett handplockat utbud av de mest eftertraktade bilmodellerna från världens ledande bilmärken.</p>
      </div>
    </div>
  );
}
