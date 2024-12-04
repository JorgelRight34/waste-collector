import MapComponent from "../components/MapComponent";
import Navbar from "../components/Navbar"
import React, { useEffect, useState } from "react";
import TakeRouteBtn from "../components/TakeRouteBtn";
import SimulateBtn from "../components/SimulateBtn";
import useFetchPage from "../hooks/useFetchPage";
import RouteInfo from "../components/RouteInfo";
import { useLocation } from "react-router-dom";


const BinsRoute = ({ }) => {
    const [center, setCenter] = useState([18.456, -69.9475])
    const [bins, setBins , reload] = useFetchPage('/get-route-bins/');
    const [routes, setRoutes] = useState(null);
    const location = useLocation(); // This gives you access to the current location
    const queryParams = new URLSearchParams(location.search);
    const embed = queryParams.get("embed"); 

    useEffect(() => {
        console.log(routes)
    }, [routes])

    
    return (
        <div className="bg-light">
            {embed ? '' : <Navbar />}
            <div className="row p-lg-3">
                <div className="col-lg-8 p-3">
                    {/* {lat: 18.456, lng: -69.9500, label: '1'}, {lat: 18.4500, lng: -69.9400, label: '2'} */}
                    {/* bins.map(bin => ({lat: bin.location.lat, lng: bin.location.lng, label: bin.id})) */}
                    <MapComponent 
                        center={center} 
                        waypoints={[
                            {lat: center[0], lng: center[1], label: 'Comienzo'},
                            ...bins.map(bin => ({lat: bin.location.lat, lng: bin.location.lng, label: bin.id, ...bin})), 
                        ]}
                        setBins={setBins} 
                        routes={routes}
                        setRoutes={setRoutes}
                    />
                </div>
                <div className="col-lg-4 p-0 p-lg-3">
                    <div className="bg-white rounded border p-3 shadow-sm route-options">
                        <div className="mb-3 d-lg-none">
                            <h3>Opciones</h3>
                        </div>
                        <div className="d-flex flex-column mb-3">
                            <SimulateBtn 
                                className="btn btn-outline-primary mb-2" 
                                reload={reload}
                            >
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="material-symbols-outlined me-1">
                                        play_arrow
                                    </span>
                                    Simular
                                </div>
                            </SimulateBtn>
                            <TakeRouteBtn 
                                className="btn btn-success"
                                startingPoint={center}
                                bins={bins}
                                routes={routes}
                            >
                               <div className="d-flex align-items-center justify-content-center">
                                    <span className="material-symbols-outlined me-1">
                                        signpost
                                    </span>
                                    Tomar Ruta
                                </div>
                            </TakeRouteBtn>
                        </div>
                        <div className="mb-3">
                            <h5 className="mb-3">{routes?.name}</h5>
                            <div className="px-2" style={{ maxHeight: '65vh', overflow: 'auto'}}>
                                <RouteInfo routes={routes} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default BinsRoute