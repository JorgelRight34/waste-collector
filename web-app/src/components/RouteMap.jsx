import { useState } from "react";
import MapComponent from "./MapComponent";
import RouteInfo from "./RouteInfo";

const RouteMap = ({ route }) => {
    const [routes, setRoutes] = useState(null);
    const lat = route.startingPoint?.coordinates[0];
    const lng = route.startingPoint?.coordinates[1]
    
    return (
        <div className="row">
            <div className="col-lg-8">
                <MapComponent
                    center={[lat, lng]} 
                    waypoints={[
                        {lat: lat, lng: lng, label: 'Comienzo'},
                        ...route.bins?.map(bin => ({lat: bin.location.lat, lng: bin.location.lng, label: bin.id, ...bin})), 
                    ]}
                    routes={routes}
                    setRoutes={setRoutes}
                />
            </div>
            <div className="col-lg-4">
                <div className="bg-white border rounded shadow-sm p-3 route-options">
                    <h5 className="mb-3">{routes?.name}</h5>
                    <div className="px-2" style={{ maxHeight: '65vh', overflow: 'auto'}}>
                        <RouteInfo routes={routes} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RouteMap