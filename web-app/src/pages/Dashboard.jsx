import { useState } from "react"
import Bin from "../components/Bin"
import CollectionRoute from "../components/CollectionRoute"
import LineChart from "../components/LineChart"
import Navbar from "../components/Navbar"
import { testData, testRoutesData } from "../utils/constants"
import Widget from "../components/Widget"
import BinForm from "../components/forms/BinForm"
import api from "../api"
import BinsDisplay from "../components/dashboard/BinsDisplay"
import RoutesDisplay from "../components/dashboard/RoutesDisplay"

const Dashboard = ({ }) => {
    const [isDialogShowing, setIsDialogShowing] = useState(false);

    return (
        <div className="bg-light">
            <Navbar />
            {/* First Row */}
            <div className="row p-lg-3">
                <div className="col-lg-6 p-lg-3">
                    <BinsDisplay />
                </div>
                <div className="col-lg-6 p-lg-3">
                    <RoutesDisplay />
                </div>
            </div>
            {/* Second Row */}
            <div className="row p-lg-3">
                {/* Tendecy of fullness by zone */}
                <div className="col-lg-6 p-lg-3">
                    <div className="bg-white p-3 border rounded">
                        <div className="mb-3">
                            <h3>Tendencias de Llenado por Zona</h3>
                        </div>
                        <div className="p-3" style={{height: '70vh', overflow: 'auto'}}>
                            <LineChart 
                                chartData={{
                                    labels: ['Bella Vista', 'Mirador Norte', 'El Millón', 'Evaristo Morales', 'Naco', 'Piantini'],
                                    datasets: [
                                    {
                                        label: 'Llenado por Zona',
                                        data: [65, 59, 80, 81, 56, 55, 40],
                                        fill: false,
                                        borderColor: 'rgb(75, 192, 192)',
                                        tension: 0.1,
                                    },
                                    ],
                            }} />
                        </div>
                    </div>
                </div>
                {/* Routes per Day */}
                <div className="col-lg-6 p-lg-3">
                    <div className="bg-white p-3 border rounded">
                        <div className="mb-3">
                            <h3>Tendencias de Rutas por Día</h3>
                        </div>
                        <div className="p-3" style={{height: '70vh', overflow: 'auto'}}>
                            <LineChart 
                                chartData={{
                                    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Sábado', 'Domingo'],
                                    datasets: [
                                        {
                                            label: 'Rutas por Día',
                                            data: [65, 59, 80, 81, 56, 55, 40],
                                            fill: false,
                                            borderColor: 'rgb(75, 192, 192)',
                                            tension: 0.1,
                                    },
                                    ],
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard