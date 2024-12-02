
const Dialog = ({ show, onHide, title, body, height="75vh", width="75vh"}) => {
    return (
        <div className={`modal-background ${show ? '' : 'd-none'} `}>
            <div className="dialog-modal bg-white rounded p-3" style={{ height: height, width: width}}>
                <div className="d-flex mb-3">
                    <h3>{title}</h3>
                    <div className="d-flex align-items-center ms-auto">
                        <span className="material-symbols-outlined hover" onClick={onHide}>
                            close
                        </span>
                    </div>
                </div>
                <div>
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Dialog