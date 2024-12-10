import api from "../api"
import { toast } from "react-toastify"
import { toastStyle } from "../utils/constants";

const TakeRouteBtn = ({ className, bins, startingPoint, children, routes }) => {
    const handleClick = async () => {
        let today = new Date;
        today = today.getDay()

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

        if (response.status === 200) {
            toast.success('Se ha tomado la ruta!', toastStyle);
            location.reload();
        }
    }

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    )
}

export default TakeRouteBtn