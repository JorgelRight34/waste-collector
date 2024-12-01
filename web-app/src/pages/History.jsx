import Bin from "../components/Bin"
import Navbar from "../components/Navbar"
import { historyTestData, testData } from "../utils/constants"
import { toTitleCase } from "../utils/utility-functions"

const History = ({ }) => {

    return (
        <div className="bg-light">
            <Navbar />
            <div className="px-5 mt-5 w-75 mx-auto">
                <input type="date" className="form-control shadow-sm" />
            </div>
            <div className="p-lg-5 w-75 mx-auto">
                {historyTestData.map(day => (
                    <div className="mb-5 bg-white border rounded shadow-sm p-3" key={day.day}>
                        <div className="mb-3">
                            <h3>{toTitleCase(day.day)}</h3>
                        </div>
                        <div className="mb-2 p-3">
                            {day.bins.map(bin => <Bin className={"mb-3"}  key={bin.id} bin={bin} />)}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default History