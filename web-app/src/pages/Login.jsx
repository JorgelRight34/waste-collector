import { useState } from "react"
import Navbar from "../components/Navbar"
import api from "../api"
import { useNavigate } from "react-router-dom"

const Login = ({ }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        
            console.log("username", username)
            console.log("password", password);
            const response = await api.post('/accounts/login/', {
                username: "jorge3",
                password: "jp012003",
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            
            console.log("setting")
            localStorage.setItem('accessToken', response.data.access_token);
            localStorage.setItem('refreshToken', response.data.access_token);
            navigate('/');
    
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
                        <div className="mb-2">
                            <div className="form-group">
                                <label className="form-label" id="username">
                                    Username
                                </label>
                                <input 
                                    className="form-control" 
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)} 
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
                                    type="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={login}>
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login