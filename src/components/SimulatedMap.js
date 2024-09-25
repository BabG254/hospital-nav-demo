import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function SimulatedMap() {
  const [position, setPosition] = useState([51.505, -0.09]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition([position[0] + 0.0001, position[1] + 0.0001]);
    }, 2000);
    return () => clearInterval(interval);
  }, [position]);

  return (
    <div style={{ height: '500px', margin: '50px auto', width: '80%' }}>
      <MapContainer center={position} zoom={16} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Simulated Position: {position[0].toFixed(5)}, {position[1].toFixed(5)}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default SimulatedMap;