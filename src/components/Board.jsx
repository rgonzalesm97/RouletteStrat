import { createContext, useState } from "react"
import PlacesWheel from "./PlacesWheel"
import Roulette from "./Roulette"
import History from "./History"

export const NumberHistoryContext = createContext()

const Board = () => {
    const [numberWheelSelection, setNumberWheelSelection] = useState([])
    const [numbersHistory, setNumbersHistory] = useState([])

    const handleWheelSelection = (numbers) => {
        setNumberWheelSelection(numbers)
    }

    const getWheelSelection = () => {
        return [...numberWheelSelection]
    }
    
    return (
        <NumberHistoryContext.Provider value={[numbersHistory, setNumbersHistory]}>
            <section className="board-container">
                <Roulette numberWheelSelection={numberWheelSelection} getWheelSelection={getWheelSelection} />
                <PlacesWheel getWheelSelection={getWheelSelection} handleWheelSelection={handleWheelSelection}/>
                <History />
            </section>
        </NumberHistoryContext.Provider>
    )
}

export default Board