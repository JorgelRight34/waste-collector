import { useState } from "react";
import api from "../../api";
import BinForm from "./BinForm";

const BinEditForm = ({ bin, setBins }) => {
    const [formData, setFormData] = useState({
        lat: bin.location?.lat,
        lng: bin.location?.lng,
        street: bin.street
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let response;
        console.log({
            id: bin.id,
            location: {
                lat: formData.lat,
                lng: formData.lng
            },
            street: formData.street
        })
        try {
            response = await api.put('bins/', {
                id: bin.id,
                location: {
                    lat: formData.lat,
                    lng: formData.lng
                },
                street: formData.street
            }, {
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            setBins(prev => [...prev.filter(b => b.id != bin.id), response.data])
        } catch (err) {
            console.log(err)
            return
        }
    }

    return (
        <BinForm 
            formData={formData} 
            setFormData={setFormData}
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
        />
    )
}

export default BinEditForm