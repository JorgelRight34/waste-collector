import { useRef, useState } from "react"
import Widget from "../Widget"
import useFetchPage from "../../hooks/useFetchPage";
import LoadingSpinner from "../LoadingSpinner";
import { spinnerContainerStyle, spinnerStyle } from "../../utils/constants";
import Bin from "../Bin";

const SearchBinsForm = ({ title }) => {
    const [query, setQuery] = useState('');
    const [bins, setBins, setPage] = useFetchPage("/bins/", `&q=${query}`, true);
    const queryInputRef = useRef(null);

    const renderOptions = () => {
        return (
            <div className="d-flex ms-auto mb-0 ">
                <input 
                    ref={queryInputRef}
                    className="form-control mb-0 me-2" 
                    placeholder="..."
                />
                <button 
                    className="btn btn-outline-success"
                    onClick={() => {
                        setQuery(queryInputRef.current.value)
                    }}
                >
                    Buscar
                </button>
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
            {bins ? bins?.map((bin, key) => (
                <Bin 
                    key={key} 
                    className="mb-2" 
                    setBins={setBins} 
                    bin={bin} 
                    image={false} 
            />)) : <LoadingSpinner containerStyle={spinnerContainerStyle} style={spinnerStyle}/>}
        </Widget>
    )
}

export default SearchBinsForm