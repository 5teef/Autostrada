import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Header/Header.jsx'
import Nav from './Nav/Nav.jsx'
import Footer from "./Footer/Footer.jsx"

import Home from '../pages/Home.jsx'
import Fordon from '../pages/Fordon.jsx'
import NoPage from '../pages/NoPage.jsx'
import FordonDetail from '../pages/FordonDetail.jsx'
import Kontakt from '../pages/Kontakt.jsx'
import Salj from '../pages/Salj.jsx'

import Logo from "./LogoAutostrada/LogoAutostrada.jsx"
import ScrollManager from './ScrollManager/ScrollManager.jsx'
/*import Login from '../pages/Login.jsx'
import MyPage from '../pages/MyPage.jsx'
import NewItem from '../pages/NewItem.jsx'

import About from '../pages/About.jsx'
import HowTo from '../pages/HowTo.jsx'
import Contact from '../pages/Contact.jsx'*/

export default function Router() {

  return (
    <BrowserRouter basename="/">
      <header>
      <Header />
      </header>
      <main>
        <Logo />
        <Nav />
        <ScrollManager />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/fordon" element={<Fordon />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/salj" element={<Salj />} />
          <Route path="/fordon/:slug" element={<FordonDetail />} />
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