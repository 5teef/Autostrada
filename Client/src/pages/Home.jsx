/*import { useContext } from "react"
import MyBids from "../components/MyBids.jsx"
import MyItems from "../components/MyItems.jsx"
import { GlobalContext } from "../components/GlobalContext.jsx"
import LatestItems from '../components/LatestItems'
import EndingItems from '../components/EndingItems'
import Items from "../components/Items.jsx"*/
import Video from "../components/AutostradaVideo"
import HomePartner from "../components/HomePartner"
import CarsEight from "../components/HomeCarsSale8"
import SeperatorRight from "../components/SeperatorSite_Right"
import GoogleReview from "../components/GoogleReviews"
import SeperatorLeft from "../components/SeperatorSite_Left"
import Kontakt from "../components/KontaktaOss"

export default function Home() {

  return (
    <div>
      <Video />
      <HomePartner />
      <CarsEight />
      <SeperatorRight />
      <GoogleReview />
      <SeperatorLeft />
      <Kontakt />
    </div>
  )

}
