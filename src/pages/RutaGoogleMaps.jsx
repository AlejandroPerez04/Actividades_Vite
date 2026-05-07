import { useState } from "react";
import { GoogleMap, Marker, DirectionsRenderer, useJsApiLoader } from "@react-google-maps/api";

// 1. La constante de librerías va afuera
const libraries = ["drawing"];

// Coordenadas de FIMAZ
const origen = {
  lat: 23.2446,
  lng: -106.4345,
};

// Coordenadas de la Plazuela Machado
const destino = {
  lat: 23.1986,
  lng: -106.4211,
};

const containerStyle = {
  width: "100%",
  height: "500px",
};

export default function RutaGoogleMaps() {
  const [directions, setDirections] = useState(null);

  // 2. Aquí llamamos al loader con las librerías
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: libraries 
  });

  const calcularRuta = () => {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: origen,
        destination: destino,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error("Error al calcular la ruta:", status);
        }
      }
    );
  };

  if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ruta de FIMAZ a Plazuela Machado</h1>
      <p>Esta vista muestra una ruta utilizando Google Maps y Directions API.</p>
      
      <button 
        onClick={calcularRuta} 
        style={{ marginBottom: "15px", padding: "10px 15px", cursor: "pointer", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px" }}
      >
        Calcular ruta
      </button>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={origen}
        zoom={13}
      >
        <Marker position={origen} label="FIMAZ" />
        <Marker position={destino} label="Machado" />
        
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
} // <- Esta es la llave que faltaba