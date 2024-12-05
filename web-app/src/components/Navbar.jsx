import { useNavigate } from "react-router-dom"

const Navbar = ({ }) => {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
            <div className="container-fluid bg-white p-2 shadow-sm">
                <a className="navbar-brand" onClick={() => navigate('/')}>
                    Recolector
                </a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <a className="nav-link active" aria-current="page" onClick={() => navigate('/')}>
                                <div className="d-flex align-items-center">
                                    <span className="material-symbols-outlined me-1">
                                        home
                                    </span>
                                    Inicio
                                </div>
                            </a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" onClick={() => navigate('/route')}>
                                <div className="d-flex align-items-center">
                                    <span className="material-symbols-outlined me-1">
                                        map
                                    </span>
                                    Ruta
                                </div>
                            </a>
                        </li>
                        <li className="d-none nav-item me-3">
                            <a className="nav-link" onClick={() => navigate('/history')}>
                                <div className="d-flex align-items-center">
                                    <span className="material-symbols-outlined me-1">
                                        history
                                    </span>
                                    Historial
                                </div>
                            </a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" onClick={() => navigate('/dashboard')}>
                                <div className="d-flex align-items-center">
                                    <span className="material-symbols-outlined me-1">
                                        dashboard
                                    </span>
                                    Dashboard
                                </div>
                            </a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" onClick={() => navigate('/dashboard')}>
                                <div className="d-flex align-items-center">
                                    <span className="material-symbols-outlined me-1">
                                        logout
                                    </span>
                                    Cerrar Sesión
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar