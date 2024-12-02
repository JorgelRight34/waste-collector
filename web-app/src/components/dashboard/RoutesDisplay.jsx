import CollectionRoute from "../CollectionRoute"
import useFetchPage from "../../hooks/useFetchPage"
import Widget from "../Widget"

const RoutesDisplay = ({ }) => {
    const [routes, setPage] = useFetchPage("/routes/")

    return (
        <Widget 
            title="Historial de Rutas"  
            height="70vh" 
            setPage={setPage}
        >
            {routes.map(route => <CollectionRoute key={route.id} className="mb-2" route={route} />)}
        </Widget>
    )
}

export default RoutesDisplay