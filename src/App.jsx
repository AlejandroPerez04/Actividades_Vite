import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";
import Tablas from "./pages/Tablas";
import Navbar from "./components/Navbar";
import Usuarios from "./pages/Usuarios";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/acerca" element={<Acerca />} />
  <Route path="/contacto" element={<Contacto />} />
  <Route path="/tablas" element={<Tablas />} />
  <Route path="/usuarios" element={<Usuarios />} />
</Routes>
    </>
  );
}

export default App;