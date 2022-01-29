import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./Components/Inicio";
import Navbar from "./Components/Navbar";
import Productos from "./Components/Productos";

export default function AppRouter() {
  return (
 
      <Router>
          <Navbar />
          <Routes>
            <Route path="/Productos" element={<Productos />}></Route>
            <Route path="/" element={<Inicio />}></Route>
          </Routes>
                      
      </Router>

  
  );
}


