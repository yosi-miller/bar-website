import {Routes, Route} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import BarsPage from "./pages/BarsPage";
import BatMitzvahPage from "./pages/BatMitzvahPage";
import ContactUsPage from "./pages/ContactUsPage";
import HomeBoutiqueEventsPage from "./pages/HomeBoutiqueEventsPage";
import HomePage from "./pages/HomePage";
import PrestigeEventsPage from "./pages/PrestigeEventsPage";
import TableCentersPage from "./pages/TableCentersPage";
import NavbarComponent from "./components/NavbarComponent";
import FloorBarPage from "./pages/FloorBarPage";
import LiveBarPage from "./pages/LiveBarPage";
// import FooterComponent from "./components/FooterComponent";



function App() {
  return <div>
    <NavbarComponent/>
    <Routes>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/bars" element={<BarsPage/>}>
        <Route path="floor-bar" element={<FloorBarPage/>}/>
        <Route path="live-bar" element={<LiveBarPage/>}/>
      </Route>
      <Route path="/bat-mitzvah" element={<BatMitzvahPage/>}/>
      <Route path="/contact-us" element={<ContactUsPage/>}/>
      <Route path="/home-boutique-events" element={<HomeBoutiqueEventsPage/>}/>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/prestige-events" element={<PrestigeEventsPage/>}/>
      <Route path="/table-centers" element={<TableCentersPage/>}/>
    </Routes>
    {/* <FooterComponent/> */}
  </div>
}

export default App
