import { useState } from "react";
import api from "../api"
import trashBin from "../assets/trashBin.png"
import Dialog from "./Dialog"
import BinEditForm from "./forms/BinEditForm";

const Bin = ({ bin, setBins, className }) => {
    const [isDialogShowing, setIsDialogShowing] = useState(false);

    const hideDialog = () => {
        setIsDialogShowing(false);
    }

    const showDialog = () => {
        setIsDialogShowing(true);
    }

    const deleteBin = async () => {
        const response = await api.delete(`/bins/${bin.id}`)
        setBins(prev => prev.filter(b => b.id != bin.id));
    }

    return (
        <>
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
                            <span class="material-symbols-outlined hover" onClick={showDialog}>
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
            <Dialog
                show={isDialogShowing}
                onHide={hideDialog}
                body={<BinEditForm bin={bin} setBins={setBins} />}
                title="Registrar Zafacón"
                height="50vh"
            />
        </>
    )
}

export default Bin