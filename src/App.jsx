import { React } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer2 from "./Components/Footer2";
import Ciudad from "./Pages/Ciudad";
import Regionsita from "./Pages/Regionsita";
import Simulation from "./Pages/Simulation";
import Exportations from "./Pages/Exportations";
import Home from "./Pages/Home";
import Ciudades from "./Pages/Ciudades";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen justify-between bg-brand">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cities" element={<Ciudades />} />
          <Route path="/region" element={<Regionsita />} />
          <Route path="/valdivia" element={<Ciudad city="valdivia" />} />
          <Route path="/mariquina" element={<Ciudad city="mariquina" />} />
          <Route path="/corral" element={<Ciudad city="corral" />} />
          <Route path="/lagoranco" element={<Ciudad city="lagoranco" />} />
          <Route path="/lanco" element={<Ciudad city="lanco" />} />
          <Route path="/paillaco" element={<Ciudad city="paillaco" />} />
          <Route path="/panguipulli" element={<Ciudad city="panguipulli" />} />
          <Route path="/loslagos" element={<Ciudad city="loslagos" />} />
          <Route path="/launion" element={<Ciudad city="launion" />} />
          <Route path="/futrono" element={<Ciudad city="futrono" />} />
          <Route path="/riobueno" element={<Ciudad city="riobueno" />} />
          <Route path="/mafil" element={<Ciudad city="mafil" />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/exportations" element={<Exportations />} />
        </Routes>
        <Footer2 />
      </div>
    </BrowserRouter>
  );
}
