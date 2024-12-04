
import { useState } from "react";
import Dialog from "./Dialog"
import MapComponent from "./MapComponent"
import RouteInfo from "./RouteInfo"

const CollectionRoute = ({ route, className, height }) => {
    const [isDialogShowing, setIsDialogShowing] = useState(false)
    const [routes, setRoutes] = useState(null);

    const handleClick = () => {
        setIsDialogShowing(true);
    }

    const handleOnHide = () => {
        setIsDialogShowing(false);
    }

    const renderDialogBody = () => {
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
                    <div className="bg-white border rounded shadow-sm p-3">
                        <h5 className="mb-3">{routes?.name}</h5>
                        <div className="px-2" style={{ maxHeight: '65vh', overflow: 'auto'}}>
                            <RouteInfo routes={routes} />
                        </div>
                    </div>
                </div>
            </div>
        )
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
                body={isDialogShowing ? renderDialogBody() : ''}
                height="95vh"
                width="95vw"
            />

        </>
    
    )
}

export default CollectionRoute