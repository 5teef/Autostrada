import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from '../pages/Home.jsx'
import Header from './Header.jsx'
import Nav from './Nav.jsx'
import Footer from "./Footer.jsx"
import Fordon from '../pages/Fordon.jsx'
import Logo from "./LogoAutostrada.jsx"
import NoPage from '../pages/NoPage.jsx'
/*import Login from '../pages/Login.jsx'
import MyPage from '../pages/MyPage.jsx'
import NewItem from '../pages/NewItem.jsx'
import ItemDetails from '../pages/ItemDetails.jsx'
import About from '../pages/About.jsx'
import HowTo from '../pages/HowTo.jsx'
import Contact from '../pages/Contact.jsx'*/

export default function Router() {

  return (
      <BrowserRouter>
      <header>
      <Header />
      </header>
      <main>
        <Logo />
        <Nav />
        <Routes>

          <Route path="Autostrada/" element={<Home />} />
          <Route path="Autostrada/fordon" element={<Fordon />} />
          <Route path="*" element={<NoPage />} />
          
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  )

}

/*
<Route path="games" element={<Games />} />
            <Route path="login" element={<Login />} />
            <Route path="my-page" element={<MyPage />} />
            <Route path="new-item" element={<NewItem />} />
            <Route path="item/:slug" element={<ItemDetails />} />
            <Route path="*" element={<NoPage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="how-to" element={<HowTo />} />

*/