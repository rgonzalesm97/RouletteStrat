import { useContext, useEffect, useState } from 'react';
import { populatePlacesWheel, wheelColors } from '../util/util'
import WheelNumber from './WheelNumber';
import { NumberHistoryContext } from './Board';
import { RouletteStructure } from '../util/rouletteStructure';

const PlacesWheel = (getWheelSelection, handleWheelSelection) => {
    const [numbersHistory] = useContext(NumberHistoryContext)
    const [dataWheel, setDataWheel] = useState(populatePlacesWheel())

    useEffect(() => {
        if(numbersHistory.length<2) return

        const [semilast, last] = [...numbersHistory].slice(-2)
        
        let rouletteStructure = new RouletteStructure()
        rouletteStructure.create_european_roullete_structure()

        const count = rouletteStructure.count_to_next(semilast, last)

        let data = [...dataWheel]
        data.find(e => e.value === count).times++
        setDataWheel(data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numbersHistory])

    return (
        <div className="wheel-container">
            {
                dataWheel.map(({value, times}) => (
                    <WheelNumber 
                        key={value}
                        value={value}
                        selected={getWheelSelection.getWheelSelection().includes(value)?true:false}
                        getWheelSelection={getWheelSelection}
                        handleWheelSelection={handleWheelSelection}
                        times={times}
                    />
                ))
            }
            <div className="wheel-colors">
                {
                    Object.entries(wheelColors).map(([key, value]) => (
                        <div className="wheel-color" key={key}>
                            {key} <div style={{height: "20px", width: "50px", backgroundColor: `${value}`, border: "solid black 1px"}}></div>
                        </div>
                    ))
                }
            </div>           
        </div>
    )
}

export default PlacesWheel