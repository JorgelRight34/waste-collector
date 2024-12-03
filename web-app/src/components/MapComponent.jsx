import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { Icon } from "leaflet";
import "leaflet-routing-machine";
import RoutingControl from "./RoutingControl";
import trashTruckIcon from "../assets/trash-truck.png"
import Bin from "./Bin"
import { useEffect, useState } from "react";

const MapComponent = ({ 
    center, 
    waypoints, 
    height="100vh", 
    width="100%", 
    lineColor="blue", 
    lineWeight=4,
    setBins,
    routes,
    setRoutes
}) => {
    const centerIcon = new Icon({
        iconUrl: trashTruckIcon,
        iconSize: [50, 50],
    })

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
                routes={routes}
                setRoutes={setRoutes}
            />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="© OpenStreetMap contributors"
            />

            {/* Center Marker */}
            {waypoints.length > 0 ? (
            <Marker position={[waypoints[0].lat, waypoints[0].lng]} icon={centerIcon}>
                <Popup>Hey</Popup>  
            </Marker>
            ) : ''}

            {/* Custom Markers */}
            {waypoints.slice(1).map((point, index) => (
                <Marker key={index} position={[point.lat, point.lng]}>
                    <Popup className="bin-popup">
                        <Bin bin={point} setBins={setBins} image={false} />
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

export default MapComponent