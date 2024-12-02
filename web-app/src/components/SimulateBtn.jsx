import api from "../api"
import useFetchPage from "../hooks/useFetchPage"

const SimulateBtn = ({ className, children, reload }) => {
    const [bins] = useFetchPage('/bins/');

    const updateBin = async (bin) => {
        const response = await api.put('/bins/', {
            id: bin.id,
            fill_level: Math.random()
        })
    }

    const handleClick = async () => {
        bins.forEach(bin => updateBin(bin))
        reload(prev => !prev);
    }

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    )
}

export default SimulateBtn