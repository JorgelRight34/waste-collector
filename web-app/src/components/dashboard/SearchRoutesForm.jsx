import { useRef, useState } from "react"
import Widget from "../Widget"
import useFetchPage from "../../hooks/useFetchPage";
import LoadingSpinner from "../LoadingSpinner";
import { spinnerContainerStyle, spinnerStyle } from "../../utils/constants";
import CollectionRoute from "../CollectionRoute";

const SearchRoutesForm = ({ title }) => {
    const [date, setDate] = useState('');
    const [routes, setRoutes, setPage] = useFetchPage("/routes/", `&date=${date}`, true);
    const dateInputRef = useRef(null);

    const renderOptions = () => {
        return (
            <div className="d-flex ms-auto mb-0 ">
                <input 
                    ref={dateInputRef}
                    className="form-control mb-0 me-2" 
                    placeholder="..."
                    type="date"
                    onChange={() => {
                        console.log(dateInputRef.current.value)
                        setDate(dateInputRef.current.value)
                    }}
                />
            </div>
        )
    }

    return (
        <Widget 
            title={title}
            height="70vh" 
            customOptions={renderOptions()}
            setPage={setPage}
        >
            {routes ? routes?.map(route => (
                <CollectionRoute
                    key={route.id} 
                    className="mb-2" 
                    setroutes={setRoutes} 
                    route={route}
            />)) : <LoadingSpinner containerStyle={spinnerContainerStyle} style={spinnerStyle}/>}
        </Widget>
    )
}

export default SearchRoutesForm