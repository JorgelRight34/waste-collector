import api from "../api"

const TakeRouteBtn = ({ className, bins, startingPoint, children, routes }) => {
    const handleClick = async () => {
        let today = new Date;
        today = Date.getDay();

        const response = await api.post('/routes/', {
            bins: bins,
            duration: routes?.summary?.totalTime,
            distance: routes?.summary?.totalDistance,
            startingPoint: {
                name: routes.name,
                coordinates: startingPoint
            },
            instructions: routes?.instructions,
            dayOfTheWeek: today
        })
    }

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    )
}

export default TakeRouteBtn