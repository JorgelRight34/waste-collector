const LoadingSpinner = ({ containerStyle, spinnerStyle }) => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={containerStyle}>
            <div className="spinner-border text-success" role="status" style={spinnerStyle}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>              
    )
}

export default LoadingSpinner