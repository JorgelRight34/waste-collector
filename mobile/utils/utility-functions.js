export const toTitleCase = (string) => {
    return string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export const formatHour = (date) => {
    const day = String(date.getDate()).padStart(2, 0);
    const month = String(date.getMonth() + 1).padStart(2, 0);
    const year = date.getFullYear();

    return `${year}-${month}-${day}`
}