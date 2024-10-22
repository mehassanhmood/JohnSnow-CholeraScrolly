import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


const MapComponent = (props) => {
    const {
      zoom,
      showPopup,
      deathsInCircle,
      totalDeaths,
      cambridgeStreetCoords,
      goldenSquareCoords,
      showGoldenSquarePopup,
      carnabyStreetCoords,
      workhouseCoords
    } = props;
  
    const center = [51.505, -0.09]; // Broad Street pump location
    const radius = 100; // 100 yards in meters (approximately)
  
    const deathPercentage = ((deathsInCircle / totalDeaths) * 100) || 0; // Calculate percentage
    const color = `rgba(255, 0, 0, ${deathPercentage / 100})`; // Adjust color based on death percentage
  
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
        <Circle center={center} radius={radius} pathOptions={{ fillColor: color, color: color }} />
  
        {/* Marker for the Broad Street Pump */}
        <Marker position={center}>
          <Popup>Broad Street Pump</Popup>
        </Marker>
  
        {/* Marker for Cambridge Street */}
        {cambridgeStreetCoords && (
          <Marker position={cambridgeStreetCoords}>
            <Popup>Cambridge Street</Popup>
          </Marker>
        )}
  
        {/* Marker for Golden Square Pump */}
        {showGoldenSquarePopup && goldenSquareCoords && (
          <Marker position={goldenSquareCoords}>
            <Popup>
              Pump at Golden Square – A Different Outcome. Fewer deaths recorded around this pump.
            </Popup>
          </Marker>
        )}
  
        {/* Marker for Carnaby Street */}
        {carnabyStreetCoords && (
          <Marker position={carnabyStreetCoords}>
            <Popup>Carnaby Street</Popup>
          </Marker>
        )}
  
        {/* Workhouse Circle and Marker */}
        {workhouseCoords && ( 
          <>
            <Circle center={workhouseCoords} radius={radius} color="green" fillOpacity={0.5} />
            <Marker position={workhouseCoords}>
              <Popup>
                Workhouse: Very few cholera cases due to its private water supply.
              </Popup> 
            </Marker>
          </>
        )}
      </MapContainer>
    );
  };

  export default MapComponent;