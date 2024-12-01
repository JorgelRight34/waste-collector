import { useState } from "react"
import Dialog from "./Dialog";

const Widget = ({ title, options, height, children }) => {
    const [isDialogShowing, setIsDialogShowing] = useState(false);

    const hideDialog = () => {
        setIsDialogShowing(false);
    }

    const showDialog = () => {
        setIsDialogShowing(true);
    }

    return (
        <>
            <div className="bg-white p-3 border rounded">
                <div className="d-flex mb-3">
                    <h3>{title}</h3>
                    <div 
                        className="d-flex align-items-center ms-auto" 
                        style={{ display: options ? '' : 'hidden'}}
                    >
                        <span className="material-symbols-outlined hover" onClick={showDialog}>
                            add
                        </span>
                    </div>
                </div>
                <div className="p-3" style={{height: height, overflow: 'auto'}}>
                    {children}
                </div>
            </div>
            <Dialog
                show={isDialogShowing}
                onHide={hideDialog}
                title="Registrar Zafacón"
                height="50vh"
            />
        </>
    )
} 

export default Widget