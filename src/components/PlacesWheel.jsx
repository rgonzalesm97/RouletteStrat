import { useState } from 'react'
import { populatePlacesWheel } from '../util/util'
import WheelNumber from './WheelNumber';

const PlacesWheel = (getWheelSelection, handleWheelSelection) => {
    const [data, setData] = useState(populatePlacesWheel())

    return (
        <div className="wheel-container">
            {
                data.map(({value}) => (
                    <WheelNumber 
                        key={value}
                        value={value}
                        selected={getWheelSelection.getWheelSelection().includes(value)?true:false}
                        getWheelSelection={getWheelSelection}
                        handleWheelSelection={handleWheelSelection}
                    />
                ))
                }           
        </div>
    )
}

export default PlacesWheel