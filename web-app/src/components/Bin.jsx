import { useState } from "react";
import api from "../api"
import trashBin from "../assets/trashBin.png"
import Dialog from "./Dialog"
import BinEditForm from "./forms/BinEditForm";

const Bin = ({ bin, setBins, className, image=true }) => {
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
                {image ? (
                    <div className="col-3">
                        <img className="img-fluid" src={trashBin} />
                    </div>
                ): ''}
                <div className="col">
                    <div className="d-flex align-items-center mb-3 border-bottom p-3">
                        <h5 className="mb-0">Zafacón {bin.id}</h5>
                        {setBins ? (
                            <div className="ms-auto d-flex align-items-center">
                                <span className="material-symbols-outlined fs-6 hover me-3" onClick={deleteBin}>
                                    delete
                                </span>
                                <span class="material-symbols-outlined fs-6 hover" onClick={showDialog}>
                                    edit
                                </span>
                            </div>
                        ): ''}
                    </div>
                    <div className="mb-2 px-3 text-truncate">
                        <b className="mb-2">{bin.zone?.zone}</b>
                    </div>
                    <div className="mb-2 px-3 text-truncate">
                        <span className="text-truncate">
                            {bin.street}
                        </span>
                    </div>
                    <div className="mb-2 px-3">
                        Llenado: {Math.round(bin.fillLevel * 100, 2)}%
                    </div>
                </div>
            </div>
            <Dialog
                show={isDialogShowing}
                onHide={hideDialog}
                body={<BinEditForm bin={bin} setBins={setBins} />}
                title="Editar Zafacón"
                height="75vh"
            />
        </>
    )
}

export default Bin