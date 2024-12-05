
import { useState } from "react";
import Dialog from "./Dialog"
import MapComponent from "./MapComponent"
import RouteInfo from "./RouteInfo"
import RouteMap from "./RouteMap";

const CollectionRoute = ({ route, className, height }) => {
    const [isDialogShowing, setIsDialogShowing] = useState(false)
    const [routes, setRoutes] = useState(null);

    const handleClick = () => {
        setIsDialogShowing(true);
    }

    const handleOnHide = () => {
        setIsDialogShowing(false);
    }

    return (
        <>
            <div 
                className={`bg-white border rounded ${className}`} 
                style={{ height: height }}
            >
                <div className="d-flex border-bottom p-3">
                    <h5 className="text-truncate mb-0">{route?.startingPoint?.name}</h5>
                </div>
                <div className="d-flex p-3">
                    <div className="d-flex align-items-center me-3">
                        <span className="material-symbols-outlined fs-6 me-1">
                            distance
                        </span>
                        {route.distance}m
                    </div>
                    <div className="d-flex align-items-center me-3">
                        <span className="material-symbols-outlined fs-6 me-1">
                            schedule
                        </span>
                        {route.duration}s
                    </div>
                    <div className="d-flex align-items-center me-3">
                        <span className="material-symbols-outlined fs-6 me-1">
                            calendar_month
                        </span>
                        {route.date}
                    </div>
                    <div className="d-flex align-items-center me-3">
                        <span className="material-symbols-outlined fs-6 me-1">
                            recycling
                        </span>
                        {route?.instructions?.length}
                    </div>
                </div>
                <div className="p-2 d-flex justify-content-end border-top">
                    <button className="btn btn-outline-primary" onClick={handleClick}>
                        Más Información
                    </button>
                </div>
            </div>
            <Dialog
                title={route?.startingPoint?.name}
                show={isDialogShowing}
                onHide={handleOnHide}
                body={isDialogShowing ? <RouteMap route={route} /> : ''}
                height="95vh"
                width="95vw"
            />

        </>
    
    )
}

export default CollectionRoute