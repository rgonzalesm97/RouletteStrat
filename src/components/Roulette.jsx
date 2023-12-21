import { useEffect, useState } from "react"
import { roulette } from '../util/util'
import { RouletteStructure } from '../util/rouletteStructure'
import RouletteNumber from "./RouletteNumber"

const Roulette = (numberWheelSelection) => {
    const [centralNumber, setCentralNumber] = useState(0)
    const [possibleNumbers, setPossibleNumbers] = useState([])
    const [nextNumber, setNextNumber] = useState(null)

    let rouletteStructure = new RouletteStructure()
    for(let e of roulette){
        rouletteStructure.agregar_numero(e.number)
    }

    const handleNumberClick = (number) => {
        setNextNumber(number)
    }

    const handleCentralNumber = () => {
        setCentralNumber(nextNumber)
        setNextNumber(null)
    }

    useEffect(() => {
        const wheelSelection = [...numberWheelSelection.getWheelSelection()]
        setPossibleNumbers(rouletteStructure.extrac_possibles(centralNumber, wheelSelection))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numberWheelSelection, nextNumber])

    return (
        <div className="roulette-container">
            {
                roulette.map((number, index) => (
                    <RouletteNumber 
                        key={index}
                        index={index}
                        number={number.number}
                        color={number.color}
                        isActual={number.number===centralNumber?true:false}
                        isPossible={possibleNumbers.includes(number.number)}
                        onClick={handleNumberClick}
                    />
                ))
            }
            <div className="central-number">{centralNumber}</div>
            <div className="next">
                <button onClick={handleCentralNumber} disabled={nextNumber==null}>ASSIGN NEXT</button>
                <div className="next-number">{nextNumber}</div>
            </div>
            
        </div>
    )
}

export default Roulette