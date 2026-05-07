import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 23.2494,
  lng: -106.4111
};

function Mapa() {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  // Usamos el mismo cargador moderno que en tu otra práctica
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <p>Cargando mapa...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ubicación del Proyecto</h1>
      
      <GoogleMap 
        mapContainerStyle={containerStyle} 
        center={center} 
        zoom={12}
      >
        <Marker position={center} onClick={() => setMostrarInfo(true)} />

        {mostrarInfo && (
          <InfoWindow position={center} onCloseClick={() => setMostrarInfo(false)}>
            <div style={{ color: 'black' }}>
              <h3>Facultad de Informática</h3>
              <p>Ubicación de prueba en Mazatlán</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

export default Mapa;