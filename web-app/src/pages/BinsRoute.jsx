import MapComponent from "../components/MapComponent";
import Navbar from "../components/Navbar"
import React, { useEffect, useState } from "react";
import TakeRouteBtn from "../components/TakeRouteBtn";
import SimulateBtn from "../components/SimulateBtn";
import useFetchPage from "../hooks/useFetchPage";
import RouteInfo from "../components/RouteInfo";
import { useLocation } from "react-router-dom";
import { zones } from "../utils/constants";
import GoogleMapsBtn from "../components/GoogleMapsBtn";
import googleMapsSVG from '../assets/google-maps.svg';


const BinsRoute = ({ }) => {
    const [center, setCenter] = useState([18.456, -69.9475])
    const [routes, setRoutes] = useState(null);
    const [minFillLevel, setMinFillLevel] = useState('');
    const [quantity, setQuantity] = useState('');
    const [bins, setBins , , reload] = useFetchPage(
        '/get-route-bins/', 
        `&fill=${minFillLevel / 100}`, 
        true, 
        quantity || 10
    );
    const location = useLocation(); // This gives you access to the current location
    const queryParams = new URLSearchParams(location.search);
    const embed = queryParams.get("embed"); 

    const chooseZone = (e) => {
        const zone = zones[e.target.value];
        setCenter([(zone.minLat + zone.maxLat) / 2, (zone.minLng + zone.maxLng) / 2]);
    }

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
                            <div className="row">
                                <div className="col-lg-6 d-flex align-items-center mb-2">
                                    <input 
                                        className="form-control me-1" 
                                        placeholder="Llenado Mínimo (e.g: 50)"
                                        name="fill" 
                                        id="fill" 
                                        value={minFillLevel}
                                        onChange={(e) => setMinFillLevel(e.target.value)}
                                        max={100} 
                                        min={0} 
                                    />
                                    <span>
                                        %
                                    </span>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center mb-2">
                                    <input 
                                        className="form-control" 
                                        placeholder="Cantidad Zafacones"
                                        name="quantity" 
                                        id="quantity" 
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)} 
                                        min={1} 
                                    />
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <select
                                    className="form-control" 
                                    name="zone" 
                                    onChange={(e) => chooseZone(e)}
                                >
                                    {Object.keys(zones).map(zone => (
                                        <option key={zones[zone].value} value={zone}>
                                            {zone}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <SimulateBtn 
                                className="btn btn-outline-primary mb-2" 
                                reload={reload}
                                fill={minFillLevel}
                            >
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="material-symbols-outlined me-1">
                                        play_arrow
                                    </span>
                                    Simular
                                </div>
                            </SimulateBtn>
                            <TakeRouteBtn 
                                className="btn btn-success mb-2"
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
                            <GoogleMapsBtn 
                                className={"btn btn-outline-primary d-flex align-items-center justify-content-center"} 
                                waypoints={[
                                    {lat: center[0], lng: center[1], label: 'Comienzo'},
                                    ...bins.map(bin => ({lat: bin.location.lat, lng: bin.location.lng, label: bin.id, ...bin})), 
                                ]}
                            >
                                <img className="me-1" src={googleMapsSVG} alt="Map Icon" width="24" height="24" />
                                Abrir con Google Maps
                            </GoogleMapsBtn>
                        </div>
                        <div className="mb-3">
                            <h5 className="mb-3 text-truncate">{routes?.name}</h5>
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