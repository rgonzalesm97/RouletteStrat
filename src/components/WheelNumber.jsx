/* eslint-disable react/prop-types */

import { wheelColors } from "../util/util"

// eslint-disable-next-line react/prop-types, no-unused-vars
const WheelNumber = ({value, selected, getWheelSelection, handleWheelSelection, times=0,}) => {
    
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
                backgroundColor: `${wheelColors[times]??"red"}`,
                boxShadow: `${generateShadow()}`
            }}
            onClick={handleClick}
        >
            {value}
        </div>
    )
}

export default WheelNumber