import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
  <Link to="/">Inicio</Link> |{" "}
  <Link to="/acerca">Acerca de mí</Link> |{" "}
  <Link to="/contacto">Contacto</Link> |{" "}
  <Link to="/tablas">Tablas</Link> |{" "}
  <Link to="/usuarios">Usuarios API</Link>
  <Link to="/mapa">Mapa</Link>
  <Link to="/ruta-google-maps">Ruta FIMAZ</Link>
</nav>
  );
}

export default Navbar;
