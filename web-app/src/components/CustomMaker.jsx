import { useEffect } from "react";
import { useMap } from "react-leaflet";

const CustomMarker = ({ position, label }) => {
    const map = useMap();

    useEffect(() => {
        const marker = L.marker(position).addTo(map);
        marker.bindPopup(label); // Attach label as popup
        // Add onClick event to marker
        marker.on("click", () => {
         // Trigger the onClick function passed as prop
      });
        return () => marker.remove(); // Cleanup marker
    }, [position, label]);

  return null; // This component only handles side effects
}

export default CustomMarker