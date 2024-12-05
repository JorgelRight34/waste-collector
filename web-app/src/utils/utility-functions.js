import { zones } from "./constants";

export const generateRandomLocation = (zone) => {
    const minLat = zones[zone].minLat;
    const maxLat = zones[zone].maxLat;
    const minLng = zones[zone].minLng;
    const maxLng = zones[zone].maxLng;

    // Generate random latitude and longitude within the bounds
    const randomLat = Math.random() * (maxLat - minLat) + minLat;
    const randomLng = Math.random() * (maxLng - minLng) + minLng;

    return { lat: randomLat, lng: randomLng };
}

export const toTitleCase = (string) => {
    return string?.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
