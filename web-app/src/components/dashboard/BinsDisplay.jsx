import Widget from "../Widget";
import BinForm from "../forms/BinForm";
import Bin from "../Bin";
import useFetchPage from "../../hooks/useFetchPage";

const BinsDisplay = ({ }) => {
    const [bins, setBins, setPage] = useFetchPage("/bins/")

    return (
        <Widget 
            title="Zafacones" 
            options={true} 
            height="70vh" 
            dialogBody={<BinForm setBins={setBins} />}
            setPage={setPage}
        >
            {bins.map((bin, key) => <Bin key={key} className="mb-2" setBins={setBins} bin={bin} />)}
        </Widget>
    )
}

export default BinsDisplay