import { useRef, useState } from "react"
import Navbar from "../components/Navbar"
import api from "../api"
import { useNavigate } from "react-router-dom"
import { toastStyle } from "../utils/constants"

const Login = ({ }) => {
    const navigate = useNavigate();
    const formRef = useRef(null)
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prev => ({...prev, [name] : value}))
    }

    const login = async (event) => {
        event.preventDefault();
        try {
            const response = await api.post('/accounts/login/', {
                username: formData.username,
                password: formData.password,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            localStorage.setItem('accessToken', response.data.access_token);
            localStorage.setItem('refreshToken', response.data.access_token);
            navigate('/');
        } catch (err) {
            console.log(err);
            if (err.status == 401) {
                toast.error('Credenciales inválidas.', toastStyle)
                return
            } 
            toast.error('Ha ocurrido un error.', toastStyle)
        }
    }



    return (
        <>
            <div className="bg-light h-100">
                <Navbar />
                <div className="d-flex align-items-center justify-content-center p-lg-5">
                    <div className="bg-white border rounded p-3 w-50">
                        <div className="mb-3">
                            <h3>Iniciar Sesión</h3>
                        </div>
                        <form ref={formRef} onSubmit={(e) => login(e)}>
                            <div className="mb-2">
                                <div className="form-group">
                                    <label className="form-label" id="username">
                                        Username
                                    </label>
                                    <input 
                                        className="form-control" 
                                        name="username"
                                        value={formData.username}
                                        onChange={(e) => handleChange(e)}
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="form-group">
                                    <label className="form-label" id="username">
                                        Contraseña
                                    </label>
                                    <input 
                                        className="form-control" 
                                        name="password"
                                        value={formData.password}
                                        onChange={(e) => handleChange(e)}
                                        type="password" 
                                    />
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary" onClick={login}>
                                    Enviar
                                </button>
                            </div>
                        </form>                     
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login