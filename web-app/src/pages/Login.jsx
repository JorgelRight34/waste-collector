import { useContext, useRef, useState } from "react"
import Navbar from "../components/Navbar"
import api from "../api"
import { useNavigate } from "react-router-dom"
import { toastStyle } from "../utils/constants"
import { toast } from "react-toastify"
import { LoadingBarContext } from "../contexts/LoadingBarProvider"
import LoginForm from "../components/forms/LoginForm"

const Login = ({ }) => {
 
    return (
        <>
            <div className="bg-light h-100">
               
                <div className="row h-100">
                    <div className="col-lg-4 bg-white border d-flex align-items-center justify-content-center shadow-sm">   
                        <div className="bg-white rounded p-3 w-75">
                            <div className="mb-3">
                                <h3>Iniciar Sesión</h3>
                            </div>
                            <LoginForm />      
                        </div>
                    </div>
                    <div id="login" className="col-lg-8 p-0">
                        <div className="blue-overlay p-5 d-flex flex-column align-items-center justify-content-center">
                            <h1 className="mb-3 shadow-sm">Recolector de Residuos</h1>
                            <hr style={{ border: 'none', borderTop: '2px solid white', opacity: 1, width: '80%'}} />
                            <div>    
                                <p className="shadow-sm">
                                    Bienvenido al sistema inteligente de recolección de residuos de Santo Domingo, 
                                    una solución tecnológica diseñada para optimizar las rutas de recolección y 
                                    garantizar una gestión eficiente de los recursos. Nuestro objetivo es contribuir 
                                    a un entorno más limpio y sostenible, utilizando sensores y tecnología avanzada 
                                    para monitorear en tiempo real el nivel de llenado de los zafacones en la ciudad.
                                </p>
                                <p className="shadow-sm">
                                    Con esta plataforma, los equipos de gestión podrán acceder a datos precisos y 
                                    actualizados sobre el estado de cada contenedor, priorizando aquellos que necesitan
                                    atención inmediata. Esto no solo reduce costos operativos, sino que también disminuye
                                    la huella ambiental al evitar recorridos innecesarios.
                                </p>
                                <p className="shadow-sm">
                                    La integración de una aplicación web y móvil permite a los usuarios visualizar las rutas más
                                    eficientes y recibir notificaciones en tiempo real. Este sistema fomenta la participación 
                                    ciudadana en el manejo adecuado de los residuos y promueve prácticas sostenibles en nuestra
                                    comunidad.
                                </p>
                                <p className="shadow-sm">
                                    Inicia sesión para explorar todas las funcionalidades de la plataforma y únete a nuestro esfuerzo
                                    por transformar la gestión de residuos en Santo Domingo. Juntos, podemos crear una ciudad más limpia, 
                                    organizada y comprometida con el medio ambiente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login