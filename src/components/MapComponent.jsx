import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';


import icon from '../../public/hand_pump.jpg';
import humanIcon from '../../public/humanIcon.png';


let DefaultIcon = L.icon({
  iconUrl: icon,
  iconSize:     [28, 38], // size of the icon
  iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76]
});

L.Marker.prototype.options.icon = DefaultIcon;

let HumanIcon = L.icon({
  iconUrl: humanIcon,
  iconSize:     [4, 10], // size of the icon
  iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76]
});

const MapComponent = (props) => {
    const {
      zoom,
      showPopup,
      deathsInCircle,
      totalDeaths,
      broadStCoords,
      crownChapelCoords,
      gtMarlboroughCoords,
      deanStreetCoords,
      soSohoCoords,
      briddleStCoords,
      coventryStCoords,
      warWickStCoords,
      workhouseCoords
    } = props;
  
    const center = [51.513341,-0.136668]; // Broad Street pump location
    const radius = 100; // 100 yards in meters (approximately)
  
  
    return (
      <MapContainer center={center} zoom={zoom} style={{ width: "100%", height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {showPopup && (
          <Marker position={center}>
            <Popup>
              A marker at John Snow's pump location.
            </Popup>
          </Marker>
        )}
        {/* Draw the circle for deaths around the Broad Street Pump */}
  
        {/* Marker for the Broad Street Pump */}
        <Marker position={center}>
          <Popup>Broad Street Pump</Popup>
        </Marker>
  
        {/* Marker for Cambridge Street */}
        {crownChapelCoords && (
          <Marker position={crownChapelCoords}>
            <Popup>Crown Chapel</Popup>
          </Marker>
        )}
  
  
        {/* Marker for Carnaby Street */}
        {gtMarlboroughCoords && (
          <Marker position={gtMarlboroughCoords}>
            <Popup>GT Marlborough</Popup>
          </Marker>
        )}
        {deanStreetCoords && (
          <Marker position={deanStreetCoords}>
            <Popup>Dean Street</Popup>
          </Marker>
        )}
        {soSohoCoords && (
          <Marker position={soSohoCoords}>
            <Popup>So Soho</Popup>
          </Marker>
        )}
        {briddleStCoords && (
          <Marker position={briddleStCoords}>
            <Popup>Briddle Street</Popup>
          </Marker>
        )}
        {coventryStCoords && (
          <Marker position={coventryStCoords}>
            <Popup>Coventry Street</Popup>
          </Marker>
        )}
        {warWickStCoords && (
          <Marker position={warWickStCoords}>
            <Popup>Warwick Street</Popup>
          </Marker>
        )}

        {
          totalDeaths && totalDeaths.map((death, index) => (
            <Marker
            key={index}
            position={[death.x_latitude, death.y_longitude]}
            icon={HumanIcon}>
              <Popup>
                  Death Location {index + 1}
              </Popup>
            </Marker>
          )
        )}
  
      </MapContainer>
    );
  };

  export default MapComponent;