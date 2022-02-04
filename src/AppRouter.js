import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Barnices from "./Components/Barnices";
import Footer from "./Components/Footer";
import Inicio from "./Components/Inicio";
import Navbar from "./Components/Navbar";
import Tintas from "./Components/Tintas";
import Suministros from "./Components/Suministros";
import Bolsas from "./Components/Bopp";
import Bopp from "./Components/Bopp";
import Especiales from "./Components/Especiales";


export default function AppRouter() {
  return (
 
      <Router>
          <Navbar />
          <Routes>
            <Route path="/Especiales" element={<Especiales />}></Route>
            <Route path="/Bopp" element={<Bopp />}></Route>
            <Route path="/Bolsas" element={<Bolsas />}></Route>
            <Route path="/Suministros" element={<Suministros />}></Route>
            <Route path="/Barnices" element={<Barnices />}></Route>
            <Route path="/Tintas" element={<Tintas />}></Route>
            <Route path="/" element={<Inicio />}></Route>
          </Routes>
          <Footer />   
      </Router>

  
  );
}


