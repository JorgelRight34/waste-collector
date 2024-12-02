import MapComponent from "../components/MapComponent";
import Navbar from "../components/Navbar"
import React, { useState } from "react";
import TakeRouteBtn from "../components/TakeRouteBtn";
import SimulateBtn from "../components/SimulateBtn";
import useFetchPage from "../hooks/useFetchPage";


const BinsRoute = ({ }) => {
    const [center, setCenter] = useState([18.456, -69.9475])
    const [bins, , reload] = useFetchPage('/get-route-bins/');
    
    return (
        <div className="bg-light">
            <Navbar />
            <div className="row p-3">
                <div className="col-lg-9 p-3">
                    {/* {lat: 18.456, lng: -69.9500, label: '1'}, {lat: 18.4500, lng: -69.9400, label: '2'} */}
                    {/* bins.map(bin => ({lat: bin.location.lat, lng: bin.location.lng, label: bin.id})) */}
                    <MapComponent 
                        center={center} 
                        waypoints={[...bins.map(bin => ({lat: bin.location.lat, lng: bin.location.lng, label: bin.id})), {lat: center[0], lng: center[1], label: 'Comienzo'}]} 
                    />
                </div>
                <div className="col-lg-3 p-3">
                    <div className="bg-white rounded border p-3">
                        <div className="mb-3">
                            <h3>Opciones</h3>
                        </div>
                        <div className="d-flex flex-column mb-3">
                            <SimulateBtn 
                                className="btn btn-outline-primary mb-2" 
                                reload={reload}
                            >
                                Simular
                            </SimulateBtn>
                            <TakeRouteBtn 
                                className="btn btn-success"
                                startingPoint={center}
                                bins={bins}
                            >
                                Hacer Ruta
                            </TakeRouteBtn>
                        </div>
                        <div className="mb-3">
                            <ul>
                                <li>1ero aqui</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default BinsRoute