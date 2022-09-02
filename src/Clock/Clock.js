import React from 'react';
import { useState } from 'react';

const Clock = () => {

    const time = new Date().toLocaleTimeString()
    const [cTime, setCtime] = useState(time)
    const updateTime = () => {
        const time = new Date().toLocaleTimeString()
        setCtime(time)
    }

    setInterval(updateTime, 1000)
    return (
        <div>
            <h1 className='time'>{cTime}</h1>
            <h3 className='mobarak'>Presented by Mobarak Hossen</h3>

        </div>
    );
};

export default Clock;