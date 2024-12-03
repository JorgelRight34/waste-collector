import { useRef, useState } from "react"
import Dialog from "./Dialog";

const Widget = ({ title, options, height, children, dialogBody, setPage }) => {
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
                <div className="d-flex p-3 border-bottom mb-3">
                    <h3>{title}</h3>
                    <div 
                        className={`d-flex align-items-center ms-auto ${options ? '' : 'd-none'}`}
                    >
                        <span className="material-symbols-outlined hover" onClick={showDialog}>
                            add
                        </span>
                    </div>
                </div>
                <div 
                    ref={itemsContainerRef} 
                    className="p-3 px-5" 
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
                height="50vh"
            />
        </>
    )
} 

export default Widget