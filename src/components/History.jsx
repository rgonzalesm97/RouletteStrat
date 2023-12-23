import { useContext, useState } from "react"
import { NumberHistoryContext } from "./Board"
import { useNumberColor } from "../hooks/useNumberColor"

const History = () => {
    const [numbersHistory] = useContext(NumberHistoryContext)

    return (
        <div className="history-container">
            {numbersHistory && 
                [...numbersHistory].map((number, index) => ( 
                    <HistoryNumber key={index} number={number} />
                ))
            }
        </div>
    )
}

// eslint-disable-next-line react/prop-types
const HistoryNumber = ({number}) => {
    const color = useNumberColor({number})
    const [isWin, setIsWin] = useState("-")

    const handleClick = () => {
        if(isWin === "-") return setIsWin("W")
        if(isWin === "W") return setIsWin("L")
        else return setIsWin("-")
    }

    return (
        <div className="history-number" style={{color: `${color}`}} onClick={handleClick}>
            {number} <span style={{color: "black"}}>-</span> <span style={{color: `${isWin==="W"?"green":isWin==="L"?"red":"black"}`}}>{isWin}</span>
        </div>
    )
}

export default History