import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px'
};

// Coordenadas de Mazatlán
const center = {
  lat: 23.2494,
  lng: -106.4111
};

function Mapa() {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ubicación del Proyecto</h1>
      
      {/* import.meta.env es la forma en que Vite lee tu archivo .env */}
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap 
          mapContainerStyle={containerStyle} 
          center={center} 
          zoom={12}
        >
          {/* El marcador rojo en el mapa */}
          <Marker position={center} onClick={() => setMostrarInfo(true)} />

          {/* La ventana blanca que sale al hacer clic */}
          {mostrarInfo && (
            <InfoWindow position={center} onCloseClick={() => setMostrarInfo(false)}>
              <div style={{ color: 'black' }}>
                <h3>Facultad de Informática</h3>
                <p>Ubicación de prueba en Mazatlán</p>
              </div>
            </InfoWindow>
          )}

        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Mapa;