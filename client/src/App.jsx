import {Routes, Route} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CentralTableArtificialPage from "./pages/CentralTableArtificialPage";
import CentralTableFreshPage from "./pages/CentralTableFreshPage";
import ContactUsPage from "./pages/ContactUsPage";
import FloorBarPage from "./pages/FloorBarPage";
import HomeBoutiqueEventsPage from "./pages/HomeBoutiqueEventsPage";
import HomePage from "./pages/HomePage";
import PrestigeEventsPage from "./pages/PrestigeEventsPage";
import NavbarComponent from "./components/NavbarComponent";
// import FooterComponent from "./components/FooterComponent";



function App() {
  return <div>
    <NavbarComponent/>
    <Routes>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/central-table-artificial" element={<CentralTableArtificialPage/>}/>
      <Route path="/central-table-fresh" element={<CentralTableFreshPage/>}/>
      <Route path="/contact-us" element={<ContactUsPage/>}/>
      <Route path="/floor-bar" element={<FloorBarPage/>}/>
      <Route path="/home-boutique-events" element={<HomeBoutiqueEventsPage/>}/>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/prestige-events" element={<PrestigeEventsPage/>}/>
    </Routes>
    {/* <FooterComponent/> */}
  </div>
}

export default App
