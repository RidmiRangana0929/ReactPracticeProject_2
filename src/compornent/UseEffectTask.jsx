import React, { useEffect, useState } from 'react';
export const UseEffectTask = () => {
    const [value,setValue] = useState(0)
    const [count,setCount] = useState(0)

    useEffect(() => {
        console.log("Use Effect 1")
    }
    )

    useEffect(() => {
        console.log("Use Effect 2")
    }
    )
    

    const handleonclichvalue = () =>{
        console.log("Render for value")
        setValue(value+1)
    }
    const handleonclichcount = () =>{
        console.log("Render for count")
        setCount(count+1)
    }

    return(
        <div>
            <h1>This is value {value}</h1>
            <h1>This is count {count}</h1>

            <div>
                <button className='btn' onClick={handleonclichvalue}>Click Me</button>
                <button className='btn' onClick={handleonclichcount}>Click Me</button>
            </div>
        </div>
    )
}



// conpornent render wena welawe thamai UseEffect run wenne(hama use effecct ekakma run wenawa)
//  use effect run wen eka control karanna puluwan

//  useEffect(() => {
//     console.log("Use Effect 1")
// }, [value]
// )

// mehema array ekak athule adala value eka dammama ekata adala use effect eka witharai run wenne
// use effect eka use karanne compornent ekakata side effect ekak denna.(eliyen monawahari effect(balapamak) ekak denna )

