import { generateRandomLocation } from "../../utils/utility-functions";

const BinForm = ({ formData, setFormData, handleSubmit, handleChange }) => {
    const handleGenerateRandomLocation = () => {
        const {lat, lng} = generateRandomLocation();
        setFormData(prev => ({...prev, lat: lat, lng: lng}));
    }

    return (
        <form onSubmit={handleSubmit} className="p-3">
            {/* First row */}
            <div className="row form-group mb-1">
                <div className="col-6 d-flex flex-column px-3">
                    <label for="lat" className="form-label mx-auto">
                        Latitud
                    </label>
                    <input name="lat" id="lat" value={formData.lat}  onChange={(e) => handleChange(e)} required/>
                </div>
                <div className="col-6 d-flex flex-column px-3">
                    <label for="lng" className="form-label mx-auto">
                        Longitud
                    </label>
                    <input name="lng" id="lng" value={formData.lng} onChange={(e) => handleChange(e)} required/>
                </div>
            </div>
            <div className="mb-3">
                <button 
                    className="btn btn-outline-success"
                    type="button" 
                    onClick={handleGenerateRandomLocation}
                >
                    Generar Latitud y Longitud Random
                </button>
            </div>
            {/* Second Row */}
            <div className="row d-flex flex-column justify-content-center px-3 mb-3">
                <label for="street" className="form-label"> 
                    Calle
                </label>
                <input name="street" onChange={(e) => handleChange(e)} value={formData.street} required/>
            </div>
            <div>
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </div>
        </form>
    )
}

export default BinForm