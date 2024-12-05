const RouteInfo = ({ routes }) => {
    return (
        <div>
            {routes?.instructions?.map(instruction => (
                <div className="border rounded bg-white mb-2">
                    <div className="d-flex border-bottom p-3">
                        {instruction.road ? (
                              <h5 className="text-truncate mb-0">
                                {instruction.road}
                            </h5>
                        ) : (
                            <div className="d-flex">
                                <div className="d-flex align-items-center ms-auto me-3">
                                    <span className="material-symbols-outlined fs-6 me-1">
                                        north_east
                                    </span>
                                    {instruction.direction}
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="material-symbols-outlined fs-6 me-1">
                                        schedule
                                    </span>
                                    {instruction.time}s
                                </div>
                            </div>
                        )}
                        <div className="d-flex align-items-center ms-auto">
                            <span className="material-symbols-outlined fs-6 me-1">
                                distance
                            </span>
                            {instruction.distance}m
                        </div>
                    </div>
                    <div className="p-3">
                        <p>{instruction.text}</p>
                        {instruction.road ? (
                            <div className="d-flex">
                                <div className="d-flex align-items-center ms-auto me-3">
                                    <span className="material-symbols-outlined fs-6 me-1">
                                        north_east
                                    </span>
                                    {instruction.direction}
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="material-symbols-outlined fs-6 me-1">
                                        schedule
                                    </span>
                                    {instruction.time}s
                                </div>
                            </div>
                        ): ''}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RouteInfo