import { useState } from "react"
import PlacesWheel from "./PlacesWheel"
import Roulette from "./Roulette"

const Board = () => {
    const [numberWheelSelection, setNumberWheelSelection] = useState([])

    const handleWheelSelection = (numbers) => {
        setNumberWheelSelection(numbers)
    }

    const getWheelSelection = (index) => {
        return [...numberWheelSelection]
    }
    
    return (
        <section className="board-container">
            <Roulette/>
            <PlacesWheel getWheelSelection={getWheelSelection} handleWheelSelection={handleWheelSelection}/>
        </section>
    )
}

export default Board