import { useState } from "react";
import api from "../../api";
import BinForm from "./BinForm";
import { toast } from "react-toastify";
import { toastStyle } from "../../utils/constants";

const BinCreateForm = ({ setBins }) => {
    const [formData, setFormData] = useState({
        lat: '',
        lng: '',
        street: '',
        zone: 'Bella Vista'
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let response;
        try {
            response = await api.post('bins/', {
                location: {
                    lat: formData.lat,
                    lng: formData.lng
                },
                street: formData.street,
                zone: formData.zone
            }, {
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            setBins(prev => [...prev, response.data])
            if (response.status == 200) {
                toast.success('Zafacón creado', toastStyle);
            }
            
        } catch (err) {
            console.log(err)
            if (err.status == 409) {
                toast.error(
                    'Las locaciones de los zafacones deben ser unicas', 
                    toastStyle
                )
            }
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

export default BinCreateForm