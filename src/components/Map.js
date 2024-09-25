import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  return (
    <div style={{ height: '500px', margin: '50px auto', width: '80%' }}>
      <MapContainer center={[51.505, -0.09]} zoom={16} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>You are here</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;