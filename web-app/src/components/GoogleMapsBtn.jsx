const GoogleMapsBtn = ({ className, waypoints }) => {
    const handleClick = () => {
        const getLocation = (point) => {
            return `${point.lat},${point.lng}`
        }

        const origin = getLocation(waypoints[0]);
        const destination = getLocation(waypoints[waypoints.length - 1]);
        const waypoints2 = waypoints.map(point => getLocation(point)).join('|')

        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&waypoints=${waypoints2}&travelmode=driving`;

        // Open the URL
        window.open(googleMapsUrl);
    }

    return (
        <button className={`btn btn-outline-primary ${className}`} onClick={handleClick}>
            Abrir con Google Maps
        </button>
    )
}

export default GoogleMapsBtn