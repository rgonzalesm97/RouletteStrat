/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types, no-unused-vars
const WheelNumber = ({value, selected, getWheelSelection, handleWheelSelection, number=0,}) => {
    const colors = {
        0: "white",
        1: "#C2EDED",
        2: "#00E3EF",
        3: "#B9FFB9",
        4: "#11FF00",
        5: "#FFFAA7",
        6: "#FFE601",
        7: "#FFC891",
        8: "#FF8000",
        9: "#FF8B87",
        10: "red"
    }
    
    const alfa = (2*Math.PI)/37

    const handleClick = () => {
        let numbers = [...getWheelSelection.getWheelSelection()]
        if(numbers.includes(value)) numbers = numbers.filter(n=>n!=value)
        else numbers.push(value)

        getWheelSelection.handleWheelSelection(numbers)
    }

    const generateShadow = () => {
        if(!selected) return "0px 0px 0px 0px"
        const x = Math.sin(alfa*value)*-7
        const y = Math.cos(alfa*value)*7
        return `${x}px ${y}px 0px 0px purple`
    }

    let className = `wheel-number ${selected?"selected":""}`

    return (
        <div 
            className={className} 
            style={{
                top: `${190-(Math.cos(value*alfa)*190*0.94)-15}px`,
                left: `${190+(Math.sin(value*alfa)*190*0.94)-15}px`,
                backgroundColor: `${colors[number]??"red"}`,
                boxShadow: `${generateShadow()}`
            }}
            onClick={handleClick}
        >
            {value}
        </div>
    )
}

export default WheelNumber