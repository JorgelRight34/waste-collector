import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingBarContext } from "../../contexts/LoadingBarProvider";
import api from "../../api";
import { toast } from "react-toastify";

const LoginForm = ({ }) => {
    const navigate = useNavigate();
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [, setProgress] = useContext(LoadingBarContext);

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prev => ({...prev, [name] : value}))
    }

    const login = async (event) => {
        event.preventDefault();
        setProgress(1);
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
            setProgress(2);
            navigate('/');
        } catch (err) {
            console.log(err);

            if (err.status == 401) {
                toast.error('Credenciales inválidas.', toastStyle)
                setProgress(2);
                return
            } 
       
            setProgress(2);
            toast.error('Ha ocurrido un error.', toastStyle)
        }
    }

    return (
        <form ref={formRef} onSubmit={(e) => login(e)}>
            <div className="mb-3">
                <div className="form-group">
                    <label className="form-label" id="username">
                        Usuario
                    </label>
                    <input 
                        className="form-control" 
                        name="username"
                        value={formData.username}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <div className="mb-5">
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
                <button type="submit" className="btn w-100 btn-primary" onClick={login}>
                    <div className="d-flex align-items-center justify-content-center">
                        <span class="material-symbols-outlined me-3">
                            login
                        </span>
                        Ingresar
                    </div>
                </button>
            </div>
        </form>         
    )
}

export default LoginForm