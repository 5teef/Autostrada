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

export default function Home() {


  // <MyBids />
  // <MyItems />
  // Borttagna nedan tills de är implementerade i Server och refakturerade här

  return (
    <div>
      <Video />
      <HomePartner />
      <CarsEight />
    </div>
  )

}
