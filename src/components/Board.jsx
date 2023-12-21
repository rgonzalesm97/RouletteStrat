import { useState } from "react"
import PlacesWheel from "./PlacesWheel"
import Roulette from "./Roulette"

const Board = () => {
    const [numberWheelSelection, setNumberWheelSelection] = useState([])
    

    const handleWheelSelection = (numbers) => {
        setNumberWheelSelection(numbers)
    }

    const getWheelSelection = () => {
        return [...numberWheelSelection]
    }
    
    return (
        <section className="board-container">
            <Roulette numberWheelSelection={numberWheelSelection} getWheelSelection={getWheelSelection}/>
            <PlacesWheel getWheelSelection={getWheelSelection} handleWheelSelection={handleWheelSelection}/>
        </section>
    )
}

export default Board