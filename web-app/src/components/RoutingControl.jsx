import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import { useEffect } from "react";

const RoutingControl = ({ waypoints, lineColor, lineWeight }) => {
    const map = useMap();
  
    useEffect(() => {
      // Initialize routing control
      const routingControl = L.Routing.control({
        waypoints: waypoints.map((point) => L.latLng(point.lat, point.lng)),
        router: L.Routing.osrmv1({ serviceUrl: "https://router.project-osrm.org/route/v1" }),
        lineOptions: { styles: [{ color: lineColor, weight: lineWeight }] },
      }).addTo(map);
  
      return () => {
        map.removeControl(routingControl); // Remove routing control on cleanup
      };
    }, [map, waypoints, lineColor, lineWeight]);
  
    return null; // This component handles only side effects
};

export default RoutingControl