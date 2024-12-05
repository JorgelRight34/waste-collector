import { useEffect } from "react";
import RouteMap from "../components/RouteMap"
import useFetchPage from "../hooks/useFetchPage"
import MapComponent from "../components/MapComponent";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const History = ({ }) => {
    const location = useLocation(); 
    const queryParams = new URLSearchParams(location.search);
    const routeId = queryParams.get("route"); 
    const [route] = useFetchPage(`/routes/${routeId}`);
    const [routes, setRoutes] = useState(null);
    const lat = route.startingPoint?.coordinates[0];
    const lng = route.startingPoint?.coordinates[1]

    useEffect(() =>{
        console.log(route);
    }, [route])

    return (
        <>
            {Object.keys(route).length > 0 && <RouteMap route={route} />}
        </>
    )
}

export default History