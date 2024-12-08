import { useRef, useState } from "react"
import Dialog from "./Dialog";

const Widget = ({ title, options, customOptions='', height, children, dialogBody, setPage }) => {
    const [isDialogShowing, setIsDialogShowing] = useState(false);
    const itemsContainerRef = useRef(null);

    const hideDialog = () => {
        setIsDialogShowing(false);
    }

    const showDialog = () => {
        setIsDialogShowing(true);
    }

    const handleScroll = () => {
        const scrollHeight = itemsContainerRef.current.scrollHeight;
        const scrollTop = itemsContainerRef.current.scrollTop;
        const clientHeight = itemsContainerRef.current.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
            setPage(prev => prev + 1);
        }
    }

    return (
        <>
            <div className="bg-white border rounded shadow-sm">
                <div className="d-flex align-items-center p-3 border-bottom mb-3">
                    <h5>{title}</h5>
                    <div 
                        className={`d-flex align-items-center ms-auto ${options ? '' : 'd-none'}`}
                    >
                        <span className="material-symbols-outlined hover" onClick={showDialog}>
                            add
                        </span>
                    </div>
                    {customOptions}
                </div>
                <div 
                    ref={itemsContainerRef} 
                    className="p-2 px-3" 
                    style={{height: height, overflow: 'auto'}}
                    onScroll={handleScroll}
                >
                    {children}
                </div>
            </div>
            <Dialog
                show={isDialogShowing}
                onHide={hideDialog}
                body={dialogBody}
                title="Nuevo Registro"
                height="60vh"
            />
        </>
    )
} 

export default Widget