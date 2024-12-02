import api from "../api"
import trashBin from "../assets/trashBin.png"

const Bin = ({ bin, setBins, className }) => {
    const deleteBin = async () => {
        const response = await api.delete(`/bins/${bin.id}`)
        setBins(prev => prev.filter(b => b.id != bin.id));
    }

    const editBin = async () => {

    }

    return (
        <div className={`row border rounded ${className}`}>
            <div className="col-3">
                <img className="img-fluid" src={trashBin} />
            </div>
            <div className="col-9 p-3">
                <div className="d-flex mb-3">
                    <h4>Zafacón {bin.id}</h4>
                    <div className="ms-auto d-flex align-items-center">
                        <span className="material-symbols-outlined hover me-3" onClick={deleteBin}>
                            delete
                        </span>
                        <span class="material-symbols-outlined hover" onClick={editBin}>
                            edit
                        </span>
                    </div>
                </div>
                <div className="mb-2">
                    {bin.street}
                </div>
                <div className="mb-2">
                    Llenado: {bin.fillLevel * 100}%
                </div>
            </div>
        </div>
    )
}

export default Bin