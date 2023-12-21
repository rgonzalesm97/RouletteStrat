
const RouletteNumber = ({index, number, color, isActual, isPossible, onClick}) => {
    
    const alfa = (2*Math.PI)/37

    let className = `roulette-number ${isActual?"actual":""} ${isPossible?"possible":""}`

    const handleNextNumber = () => {
        onClick(number)
    }

    return (
        <div 
            className={className} 
            style={{
                top: `${190-(Math.cos(index*alfa)*190*0.94)-15}px`,
                left: `${190+(Math.sin(index*alfa)*190*0.94)-15}px`,
                backgroundColor: `${color}`,
                color: "white",
            }}
            onClick={handleNextNumber}
        >
            {number}
        </div>
    )
}

export default RouletteNumber