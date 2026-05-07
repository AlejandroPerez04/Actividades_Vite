import { GoogleMap, DrawingManager, useJsApiLoader } from "@react-google-maps/api";

// Es muy importante que 'libraries' esté fuera de la función principal
const libraries = ["drawing"];

const containerStyle = {
  width: "100%",
  height: "500px",
};

// Coordenadas centrales (Mazatlán)
const center = {
  lat: 23.2494,
  lng: -106.4111,
};

export default function DrawingMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: libraries, // Aquí mandamos llamar la herramienta de dibujo
  });

  if (!isLoaded) {
    return <p>Cargando mapa...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dibujar figuras en Google Maps</h2>
      <p>Usa las herramientas del mapa para dibujar una línea y un rectángulo.</p>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        <DrawingManager
          options={{
            drawingControl: true,
            drawingControlOptions: {
              position: window.google.maps.ControlPosition.TOP_CENTER,
              drawingModes: [
                window.google.maps.drawing.OverlayType.POLYLINE, // Línea
                window.google.maps.drawing.OverlayType.RECTANGLE, // Rectángulo
              ],
            },
          }}
        />
      </GoogleMap>
    </div>
  );
}