export const toTitleCase = (string) => {
    return string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export const generateRandomLocation = () => {
    const minLat = 18.4500;
    const maxLat = 18.4560;
    const minLng = -69.9500;
    const maxLng = -69.9400;

    // Generate random latitude and longitude within the bounds
    const randomLat = Math.random() * (maxLat - minLat) + minLat;
    const randomLng = Math.random() * (maxLng - minLng) + minLng;

    return { lat: randomLat, lng: randomLng };
}
