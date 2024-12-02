import api from "../api"

const TakeRouteBtn = ({ className, bins, startingPoint, children }) => {
    const handleClick = async () => {
        const response = await api.post('/routes/', {
            bins: bins,
            startingPoint: startingPoint,
            duration: Date.now()
        })
    }

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    )
}

export default TakeRouteBtn