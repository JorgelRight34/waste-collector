import Widget from "../Widget";
import Bin from "../Bin";
import useFetchPage from "../../hooks/useFetchPage";
import BinCreateForm from "../forms/BinCreateForm";

const BinsDisplay = ({ }) => {
    const [bins, setBins, setPage] = useFetchPage("/bins/")

    return (
        <Widget 
            title="Zafacones" 
            options={true} 
            height="70vh" 
            dialogBody={<BinCreateForm setBins={setBins} />}
            setPage={setPage}
        >
            {bins?.map((bin, key) => (
                <Bin 
                    key={key} 
                    className="mb-2" 
                    setBins={setBins} 
                    bin={bin} 
                    image={false} 
            />))}
        </Widget>
    )
}

export default BinsDisplay