import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Line from "/img/line.png"


export default function CarsEight() {
  const [cars, setItems] = useState([])

  useEffect(() => {
    async function load() {
      const response = await fetch("api/CarsEight")
      const data = await response.json()
      console.log(data)
      setItems(data)
    }
    load()
  }, [])

  return (
      <div className="careight-container">
        {cars.map(car => (
          <section key={car.slug} className="car-section">
              <Link to={{ pathname: `/car/${car.slug}` }} style={{ textDecoration: 'none' }}>
                <img src={car.img} alt={car.title} className="car-image" />
                <div className="car">
                <h2>{car.title}</h2>
                <div><p className="cartext">{car.undertitle}</p></div>
                </div>
                <div className="car-info">
                <div><p className="carprice">{car.price} SEK</p></div>
                <div><p className="caryear">{car.year}</p></div>
                <div><p className="carmile">{car.mil} mil</p></div>
                <div><p className="cargear">{car.vaxel}</p></div>
                <div><p className="carbransle">{car.bransle}</p></div>
                </div>
                <div className="line-seperator-car">
                  <img src={Line} alt={car.title} />
                </div>
              </Link>


            
          </section>
        ))}
      </div>

  )
}
