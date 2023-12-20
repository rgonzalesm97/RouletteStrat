import { useState } from "react"

const Roulette = () => {
    const [centralNumber, setCentralNumber] = useState(0)
    return (
        <div className="roulette-container">
            <div className="roulette"></div>
            <div className="central-number">{centralNumber}</div>
        </div>
    )
}

export default Roulette