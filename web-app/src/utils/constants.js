import { Slide } from "react-toastify";

export const historyTestData = [
    {
        day: 'hoy',
        bins: [
            {id: 0, location: 'César Augusto Roques #42', fillLevel: 0.5},
            {id: 1, location: 'Camila Henríquez Ureña', fillLevel: 0.25},
            {id: 2, location: 'Leonardo Da Vinci', fillLevel: 0.7} 
        ],
    },
    {
        day: 'ayer',
        bins: [
            {id: 0, location: 'César Augusto Roques #42', fillLevel: 0.25},
            {id: 1, location: 'Camila Henríquez Ureña', fillLevel: 0.5},
            {id: 2, location: 'Leonardo Da Vinci', fillLevel: 0.37} 
        ],
    },
]

export const testData = [
    {id: 0, location: 'César Augusto Roques #42', fillLevel: 0.5},
    {id: 1, location: 'Camila Henríquez Ureña', fillLevel: 0.25},
    {id: 2, location: 'Leonardo Da Vinci', fillLevel: 0.7},
]

export const testRoutesData = [
    {
        destination: "Santo Domingo",
        origin: "Punta Cana",
        duration: "2h 30m",
        day: "Lunes",
        hour: "08:00 AM"
    },
    {
        destination: "Santiago",
        origin: "Puerto Plata",
        duration: "1h 15m",
        day: "Martes",
        hour: "10:00 AM"
    },
    {
        destination: "La Romana",
        origin: "Santo Domingo",
        duration: "1h 45m",
        day: "Miércoles",
        hour: "06:30 PM"
    },
    {
        destination: "Bávaro",
        origin: "Higüey",
        duration: "45m",
        day: "Jueves",
        hour: "07:00 AM"
    },
    {
        destination: "Jarabacoa",
        origin: "Santiago",
        duration: "1h 30m",
        day: "Viernes",
        hour: "03:00 PM"
    },
    {
        destination: "Pedernales",
        origin: "Barahona",
        duration: "4h",
        day: "Sábado",
        hour: "05:00 AM"
    },
    {
        destination: "San Pedro de Macorís",
        origin: "La Romana",
        duration: "1h",
        day: "Domingo",
        hour: "01:00 PM"
    },
    {
        destination: "Monte Cristi",
        origin: "Mao",
        duration: "2h",
        day: "Lunes",
        hour: "11:00 AM"
    },
    {
        destination: "San Juan de la Maguana",
        origin: "Azua",
        duration: "2h 20m",
        day: "Martes",
        hour: "04:00 PM"
    },
    {
        destination: "Constanza",
        origin: "Bonao",
        duration: "1h 45m",
        day: "Miércoles",
        hour: "09:00 AM"
    },
    {
        destination: "Hato Mayor",
        origin: "El Seibo",
        duration: "1h",
        day: "Jueves",
        hour: "12:00 PM"
    },
    {
        destination: "Nagua",
        origin: "Cabrera",
        duration: "40m",
        day: "Viernes",
        hour: "02:30 PM"
    },
    {
        destination: "Dajabón",
        origin: "Santiago Rodríguez",
        duration: "1h 30m",
        day: "Sábado",
        hour: "07:00 AM"
    },
    {
        destination: "Jimaní",
        origin: "Neyba",
        duration: "3h",
        day: "Domingo",
        hour: "08:30 AM"
    },
    {
        destination: "Moca",
        origin: "La Vega",
        duration: "50m",
        day: "Lunes",
        hour: "05:15 PM"
    },
    {
        destination: "Cotuí",
        origin: "San Francisco de Macorís",
        duration: "1h 10m",
        day: "Martes",
        hour: "10:45 AM"
    },
    {
        destination: "Higüey",
        origin: "Bávaro",
        duration: "1h",
        day: "Miércoles",
        hour: "03:00 PM"
    },
    {
        destination: "Puerto Plata",
        origin: "Cabarete",
        duration: "40m",
        day: "Jueves",
        hour: "06:00 PM"
    },
    {
        destination: "Azua",
        origin: "Baní",
        duration: "1h 20m",
        day: "Viernes",
        hour: "08:30 AM"
    },
    {
        destination: "Barahona",
        origin: "San Juan de la Maguana",
        duration: "3h 15m",
        day: "Sábado",
        hour: "07:45 AM"
    }
];

export const toastStyle = {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Slide
}

export const zones = {
    "Bella Vista": {
      value: 0,
      minLat: 18.4500,
      maxLat: 18.4560,
      minLng: -69.9500,
      maxLng: -69.9400
    },
    "Naco": {
      value: 1,
      minLat: 18.4710,
      maxLat: 18.4760,
      minLng: -69.9360,
      maxLng: -69.9260
    },
    "Piantini": {
      value: 2,
      minLat: 18.4700,
      maxLat: 18.4750,
      minLng: -69.9300,
      maxLng: -69.9200
    },
    "Los Cacicazgos": {
      value: 3,
      minLat: 18.4630,
      maxLat: 18.4700,
      minLng: -69.9530,
      maxLng: -69.9430
    },
    "Gazcue": {
      value: 4,
      minLat: 18.4590,
      maxLat: 18.4640,
      minLng: -69.9320,
      maxLng: -69.9220
    },
    "La Esperilla": {
      value: 5,
      minLat: 18.4540,
      maxLat: 18.4590,
      minLng: -69.9270,
      maxLng: -69.9170
    },
    "Ensanche Evaristo Morales": {
      value: 6,
      minLat: 18.4600,
      maxLat: 18.4650,
      minLng: -69.9200,
      maxLng: -69.9100
    },
    "Parque Iberoamérica": {
      value: 7,
      minLat: 18.4500,
      maxLat: 18.4550,
      minLng: -69.9200,
      maxLng: -69.9100
    },
    "Mirador Sur": {
      value: 8,
      minLat: 18.4640,
      maxLat: 18.4700,
      minLng: -69.9300,
      maxLng: -69.9200
    },
    "La Julia": {
      value: 9,
      minLat: 18.4490,
      maxLat: 18.4540,
      minLng: -69.9380,
      maxLng: -69.9280
    },
    "Ensanche Luperón": {
      value: 10,
      minLat: 18.4680,
      maxLat: 18.4740,
      minLng: -69.9500,
      maxLng: -69.9400
    }
  };
  