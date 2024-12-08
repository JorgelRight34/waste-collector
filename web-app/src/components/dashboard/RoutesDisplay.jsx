import CollectionRoute from "../CollectionRoute"
import useFetchPage from "../../hooks/useFetchPage"
import Widget from "../Widget"
import { spinnerContainerStyle, spinnerStyle } from "../../utils/constants"
import LoadingSpinner from "../LoadingSpinner"

const RoutesDisplay = ({ }) => {
    const [routes, setRoutes, setPage] = useFetchPage("/routes/")

    return (
        <Widget 
            title="Historial de Rutas"  
            height="70vh" 
            setPage={setPage}
        >
            {routes ? (
                routes?.map(route => <CollectionRoute key={route.id} className="mb-2" route={route} />)
            ) : <LoadingSpinner containerStyle={spinnerContainerStyle} style={spinnerStyle} />}
        </Widget>
    )
}

export default RoutesDisplay