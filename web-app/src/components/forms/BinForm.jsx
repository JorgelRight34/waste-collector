import { useRef } from "react";
import api from "../../api";
import { generateRandomLocation } from "../../utils/utility-functions";
import { zones } from "../../utils/constants";

const BinForm = ({ formData, setFormData, handleSubmit, handleChange }) => {
    const streetInputRef = useRef(null);
    const binFormRef = useRef(null);

    const handleGenerateRandomLocation = () => {
        const {lat, lng} = generateRandomLocation(formData.zone);
        setFormData(prev => ({...prev, lat: lat, lng: lng}));
        getStreet(lat, lng);
    }

    const handleSelectZone = (event) => {
        handleChange(event);
        setFormData(prev => ({...prev, lat: '', lng: ''}));
        setFormData(prev => ({...prev, street: ''}))
    }

    const getStreet = async (lat, lon) => {
        if (!lat || !lon) {
            return
        }

        let response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}04&format=json`,
            {
                method: 'GET'
            }
        )

        response = await response.json()
        console.log(response);
        const value = response?.display_name || 'No se pudo averiguar una calle para la localización dada';
        setFormData(prev => ({...prev, street: value}));
    }

    return (
        <form 
            onSubmit={(event) => {
                binFormRef.current.reset()
                handleSubmit(event);
            }} 
            className="p-3"
            ref={binFormRef}
        >
            {/* First Row */}
            <div className="row d-flex flex-column justify-content-center px-3 mb-2">
                <label htmlFor="zone" className="form-label"> 
                    Sector/Zona
                </label>
                <select
                    className="form-control" 
                    name="zone" 
                    onChange={(e) => handleSelectZone(e)}
                >
                    {Object.keys(zones).map(zone => (
                        <option key={zones[zone].value} value={zone}>
                            {zone}
                        </option>
                    ))}
                </select>
            </div>
            {/* Second row */}
            <div className="row form-group mb-2">
                <div className="col-6 d-flex flex-column px-3">
                    <label htmlFor="lat" className="form-label">
                        Latitud
                    </label>
                    <input 
                        name="lat" 
                        id="lat" 
                        className="form-control"
                        value={formData.lat} 
                        onBlur={getStreet} 
                        onChange={(e) => handleChange(e)} 
                        required
                    />
                </div>
                <div className="col-6 d-flex flex-column px-3">
                    <label htmlFor="lng" className="form-label">
                        Longitud
                    </label>
                    <input 
                        name="lng" 
                        id="lng" 
                        className="form-control"
                        value={formData.lng} 
                        onBlur={getStreet} 
                        onChange={(e) => handleChange(e)} 
                        required
                    />
                </div>
            </div>
            {/* Third Row */}
            <div className="row d-flex flex-column justify-content-center px-3 mb-5">
                <label htmlFor="street" className="form-label"> 
                    Calle
                </label>
                <input 
                    ref={streetInputRef}
                    name="street" 
                    className="form-control"
                    onChange={(e) => handleChange(e)} 
                    value={formData.street} 
                    required
                />
            </div>
            <div className="d-flex">
                <button type="submit" className="btn btn-primary me-3">
                    Confirmar
                </button>
                <button 
                    className="btn btn-outline-success"
                    type="button" 
                    onClick={handleGenerateRandomLocation}
                >
                    Generar Latitud y Longitud Random
                </button>
            </div>
        </form>
    )
}

export default BinForm