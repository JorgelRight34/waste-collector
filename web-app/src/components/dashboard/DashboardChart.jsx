import useFetchPage from "../../hooks/useFetchPage"
import { spinnerContainerStyle, spinnerStyle } from "../../utils/constants";
import LineChart from "../LineChart";
import LoadingSpinner from "../LoadingSpinner";

const DashboardChart = ({ endpoint, title, label, borderColor='rgb(75, 192, 192)', tension=0.1, className }) => {
    const [items] = useFetchPage(endpoint);

    return (
        <div className={`bg-white border rounded shadow-sm ${className}`}>
            <div className="mb-3 border-bottom p-3">
                <h5 className="mb-0">{title}</h5>
            </div>
            <div className="d-flex align-items-center p-3 justify-content-center">
                {items ? (
                    <LineChart 
                        chartData={{
                            labels: Object.keys(items),
                            datasets: [

                                {
                                    label: label,
                                    data: Object.keys(items).map(key => items[key]),
                                    fill: false,
                                    borderColor: borderColor,
                                    tension: tension,
                                },
                            ],
                    }} />
                ) : <LoadingSpinner containerStyle={spinnerContainerStyle} style={spinnerStyle} />}
            </div>
        </div>
    )
}

export default DashboardChart