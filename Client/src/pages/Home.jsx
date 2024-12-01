/*import { useContext } from "react"
import MyBids from "../components/MyBids.jsx"
import MyItems from "../components/MyItems.jsx"
import { GlobalContext } from "../components/GlobalContext.jsx"
import LatestItems from '../components/LatestItems'
import EndingItems from '../components/EndingItems'
import Items from "../components/Items.jsx"*/
import Video from "../components/AutostradaVideo/AutostradaVideo"
import HomePartner from "../components/HomePartner/HomePartner"
import CarsEight from "../components/HomeCarsSale8/HomeCarsSale8"
import SeperatorRight from "../components/Seperator/SeperatorSite_Right"
import GoogleReview from "../components/GoogleReviews/GoogleReviews"
import SeperatorLeft from "../components/Seperator/SeperatorSite_Left"

export default function Home() {

  return (
    <div>
      <Video />
      <HomePartner />
      <CarsEight />
      <SeperatorRight />
      <GoogleReview />
      <SeperatorLeft />
    </div>
  )

}
