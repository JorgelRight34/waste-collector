import trashBin from "../assets/trashBin.png"

const CollectionRoute = ({ route, className, height }) => {
    return (
        <div 
            className={`bg-white row border rounded ${className}`} 
            style={{ height: height }}
        >
            <div className="col-3">
                <img className="img-fluid" src={trashBin} />
            </div>
            <div className="col p-3">
                <div className="mb-2">
                    <h4>{route.destination} - {route.origin}</h4>
                </div>
                <div className="mb-2 d-flex flex-column">
                    <span className="me-3">
                        Duración: <b>{route.duration}</b>
                    </span>
                    <span className="me-3">
                        Día: <b>{route.day}</b>
                    </span>
                    <span className="me-3">
                        Hora: <b>{route.hour}</b>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CollectionRoute