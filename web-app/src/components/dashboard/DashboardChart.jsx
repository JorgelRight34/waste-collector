import useFetchPage from "../../hooks/useFetchPage"
import LineChart from "../LineChart";

const DashboardChart = ({ endpoint, title, label, borderColor='rgb(75, 192, 192)', tension=0.1 }) => {
    const [items] = useFetchPage(endpoint);

    return (
        <div className="bg-white border rounded shadow-sm">
            <div className="mb-3 border-bottom p-3">
                <h3 className="mb-0">{title}</h3>
            </div>
            <div className="d-flex align-items-center p-3 justify-content-center">
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
            </div>
        </div>
    )
}

export default DashboardChart