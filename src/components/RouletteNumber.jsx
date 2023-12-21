
// eslint-disable-next-line react/prop-types
const RouletteNumber = ({index, number, color, isActual, isPossible, onClick}) => {
    
    const alfa = (2*Math.PI)/37

    let className = `roulette-number ${isActual?"actual":""} ${isPossible?"possible":""}`

    const handleNextNumber = () => {
        onClick(number)
    }

    const generateShadow = () => {
        if(!isActual && !isPossible) return "0px 0px 0px 0px"
        const color = isActual?"yellow":"blue"
        const x = Math.sin(alfa*index)*-7
        const y = Math.cos(alfa*index)*7
        return `${x}px ${y}px 0px 0px ${color}`
    }

    return (
        <div 
            className={className} 
            style={{
                top: `${190-(Math.cos(index*alfa)*190*0.94)-15}px`,
                left: `${190+(Math.sin(index*alfa)*190*0.94)-15}px`,
                backgroundColor: `${color}`,
                color: "white",
                boxShadow: `${generateShadow()}`
            }}
            onClick={handleNextNumber}
        >
            {number}
        </div>
    )
}

export default RouletteNumber