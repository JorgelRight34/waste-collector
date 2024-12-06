const GoogleMapsBtn = ({ className, waypoints, children }) => {
    const handleClick = () => {
        const getLocation = (point) => {
            return `${point.lat},${point.lng}`
        }

        const origin = getLocation(waypoints[0]);
        const destination = getLocation(waypoints[waypoints.length - 1]);
        const waypoints2 = waypoints.map(point => getLocation(point)).join('|')

        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&waypoints=${waypoints2}&travelmode=driving`;

        // Open the URL
        window.open(googleMapsUrl, '_blank');
    }

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    )
}

export default GoogleMapsBtn