import React, { useState } from 'react';

function Counter() {
    const [num, setNum] = useState(0)
    return (
        <>
            <button onClick={() => setNum(num+1)}>+</button>
            <h1>{num}</h1>
            <button onClick={() => setNum(num-1)}>-</button>
        </>
    )
}

export default Counter