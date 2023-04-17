
import './App.css';


import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";
import Forcastweather from "./pages/HomeContent"
import CurrentWeathercontent from "./pages/CurrentWeathercontent"
import AboutusContent from "./pages/AboutusContent"


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CurrentWeathercontent />} />

        <Route path="/Aboutus" element={<AboutusContent />} />
        <Route path="/Forcastweather" element={<Forcastweather/>} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
