import { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import CustomMarker from "./CustomMaker";
import RoutingControl from "./RoutingControl";

const MapComponent = ({ center, waypoints, height="100vh", width="100%", lineColor="blue", lineWeight=4 }) => {
    
    return (
        <MapContainer
            id="map"
            center={center} // Bella Vista, Santo Domingo
            zoom={15} // Street-level zoom
            style={{ height: height, width: width }}
        >
            <RoutingControl 
                waypoints={waypoints.map(point => L.latLng(point.lat, point.lng))} 
                lineColor={lineColor} 
                lineWeight={lineWeight} 
            />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="© OpenStreetMap contributors"
            />
            {/* Custom Markers */}
            {waypoints.map((point, index) => (
                <div>
                    <CustomMarker key={index} position={[point.lat, point.lng]} label={point.label} />
                </div>
                
            ))}

            
        </MapContainer>
    )
}

export default MapComponent