import { useRef } from "react";
import api from "../../api";
import { generateRandomLocation } from "../../utils/utility-functions";

const BinForm = ({ formData, setFormData, handleSubmit, handleChange }) => {
    const streetInputRef = useRef(null);

    const handleGenerateRandomLocation = () => {
        const {lat, lng} = generateRandomLocation();
        setFormData(prev => ({...prev, lat: lat, lng: lng}));
    }

    const getStreet = async () => {
        const lat = formData.lat;
        const lon = formData.lng;

        console.log("lat", lat);
        console.log("lon", lon);
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

        streetInputRef.current.value = response?.display_name || 'No se pudo averiguar una calle para la localización dada';
    }

    return (
        <form onSubmit={handleSubmit} className="p-3">
            {/* First row */}
            <div className="row form-group mb-1">
                <div className="col-6 d-flex flex-column px-3">
                    <label for="lat" className="form-label">
                        Latitud
                    </label>
                    <input name="lat" id="lat" value={formData.lat} onBlur={getStreet} onChange={(e) => handleChange(e)} required/>
                </div>
                <div className="col-6 d-flex flex-column px-3">
                    <label for="lng" className="form-label">
                        Longitud
                    </label>
                    <input name="lng" id="lng" value={formData.lng} onBlur={getStreet} onChange={(e) => handleChange(e)} required/>
                </div>
            </div>
            <div className="mb-3 d-flex">

            </div>
            {/* Second Row */}
            <div className="row d-flex flex-column justify-content-center px-3 mb-3">
                <label for="street" className="form-label"> 
                    Calle
                </label>
                <input 
                    ref={streetInputRef}
                    name="street" 
                    onChange={(e) => handleChange(e)} 
                    value={formData.street} 
                    required
                    disabled
                />
            </div>
            <div className="d-flex">
                <button type="submit" className="btn btn-primary me-3">
                    Enviar
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