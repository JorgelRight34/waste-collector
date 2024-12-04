import { useState } from "react"
import LineChart from "../components/LineChart"
import Navbar from "../components/Navbar"
import BinsDisplay from "../components/dashboard/BinsDisplay"
import RoutesDisplay from "../components/dashboard/RoutesDisplay"
import DashboardChart from "../components/dashboard/DashboardChart"

const Dashboard = ({ }) => {
    const [isDialogShowing, setIsDialogShowing] = useState(false);

    return (
        <div className="bg-light">
            <Navbar />
            {/* First Row */}
            <div className="row p-lg-3">
                <div className="col-lg-4 p-lg-3">
                    <BinsDisplay />
                </div>
                <div className="col-lg-4 p-lg-3">
                    <RoutesDisplay />
                </div>
                <div 
                    className="col-lg-4 p-lg-3"
                >          
                    <div style={{ maxHeight: '81vh', overflowY: 'auto'}}>
                        {/* Tendecy of fillness by zone */}
                        <DashboardChart 
                            className="mb-2"
                            endpoint="stats/routes/" 
                            title="Rutas por Día" 
                            label="Rutas por Día"
                        />
                        {/* Routes per Day */}
                        <DashboardChart
                            endpoint="stats/bins/"
                            title="Nivel de Llenado por Día"
                            label="Nivel de Llenado por Día"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard