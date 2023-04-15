
import './App.css';
import Currentweather from './pages/Home';

import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";
import About from './pages/About';
import     Home from './pages/Currentweather';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/api-weather-app" element={<Home />} />

        <Route path="/Aboutus" element={<About />} />
        <Route path="/Forcastweather" element={<Currentweather/>} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
