import trashBin from "../assets/trashBin.png"

const Bin = ({ bin, className }) => {
    return (
        <div className={`row border rounded ${className}`}>
            <div className="col-3">
                <img className="img-fluid" src={trashBin} />
            </div>
            <div className="col-9 p-3">
                <div className="mb-3">
                    <h4>Zafacón {bin.id}</h4>
                </div>
                <div className="mb-2">
                    {bin.location}
                </div>
                <div className="mb-2">
                    Llenado: {bin.fillLevel * 100}%
                </div>
            </div>
        </div>
    )
}

export default Bin