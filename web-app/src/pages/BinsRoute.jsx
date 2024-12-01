import MapComponent from "../components/MapComponent";
import Navbar from "../components/Navbar"
import React, { useEffect } from "react";


const BinsRoute = ({ }) => {
    
    return (
        <div className="bg-light">
            <Navbar />
            <div className="row p-3">
                <div className="col-lg-9 p-3">
                    <MapComponent 
                        center={[18.456, -69.9475]} 
                        waypoints={[{lat: 18.456, lng: -69.9500, label: '1'}, {lat: 18.4500, lng: -69.9400, label: '2'}]} 
                    />
                </div>
                <div className="col-lg-2 p-3">
                    <div className="bg-white rounded border p-3">
                        <div className="mb-2">
                            <h3>Información</h3>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default BinsRoute