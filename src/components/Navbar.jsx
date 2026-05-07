import { Link } from "react-router-dom";

function Navbar() {
  // Estilos generales para el contenedor de la barra
  const navStyle = {
    backgroundColor: "#1e1e1e", // Un gris oscuro elegante
    padding: "15px 30px",
    display: "flex",
    justifyContent: "center", // Centra todos los botones
    alignItems: "center",
    gap: "20px", // Crea espacio automático entre cada enlace (¡adiós barritas | !)
    flexWrap: "wrap", // Si no caben en la pantalla, se bajan a otra línea
    marginBottom: "30px",
    borderRadius: "10px", // Bordes redondeados para un look moderno
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" // Una pequeña sombra
  };

  // Estilos para cada enlace individual
  const linkStyle = {
    color: "#ffffff", // Texto blanco
    textDecoration: "none", // Quita el subrayado azul feo
    fontWeight: "500",
    fontSize: "16px",
    fontFamily: "system-ui, sans-serif"
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Inicio</Link>
      <Link to="/acerca" style={linkStyle}>Acerca de mí</Link>
      <Link to="/contacto" style={linkStyle}>Contacto</Link>
      <Link to="/tablas" style={linkStyle}>Tablas</Link>
      <Link to="/usuarios" style={linkStyle}>Usuarios API</Link>
      <Link to="/mapa" style={linkStyle}>Mapa</Link>
      <Link to="/ruta-google-maps" style={linkStyle}>Ruta FIMAZ</Link>
      <Link to="/dibujar" style={linkStyle}>Dibujar Mapa</Link>
    </nav>
  );
}

export default Navbar;