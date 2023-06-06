import React, { useEffect, useRef, useState } from 'react'

export const UseRefTask = () => {

    const [currentValue,setCurrentValue]=useState(0)
    const preValue = useRef();

    useEffect(() => {
        preValue.current=currentValue
    })


    const preValueToUI = preValue.current
  return (
    <div>
        <h1>This is the current value : {currentValue} </h1>
        <h1>This is the pre value : {preValueToUI} </h1>
        <button onClick={() => setCurrentValue(currentValue +1)}> click here</button>
    </div>
  )
}



// actual dom eka access karanna oona unama (actual dom eka ekka interact wenna oona unama) thamai UseRef eka use karanne (hamathissema kalin situation thamai update karanne)
// actual dom eke thiyana value eka cach karala thiayaganna eka (vertual dom eka paththe)
// "preValue.current=currentValue" kiyana code eke .current kiyane reference ekak, eken thamai preValue kiyana object eke current stait eka reference karanne 
