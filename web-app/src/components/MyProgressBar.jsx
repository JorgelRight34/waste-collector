const MyProgressBar = ({ className, height, containerColor, barColor, progress}) => {
    return (
        <div className={className} style={{ width: "100%", backgroundColor: containerColor}}>
            <div style={{ width: progress, height: height, backgroundColor: barColor}}></div>
        </div>    
    )
}

export default MyProgressBar