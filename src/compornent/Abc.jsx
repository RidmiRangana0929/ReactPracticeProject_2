import React ,{ useState } from "react";

export const Abc=()=>{
    const [newvalue,setNewValue]= useState(0)

    const handleonclickup=()=>{

        setNewValue(newvalue + 1)
        
    }
    const handleonclickdown=()=>{

        if(newvalue>0){
            setNewValue(newvalue - 1)
        }else{
            alert("No Value");
        }

        // setNewValue(newvalue - 1)
        // if((newvalue) == 0){
        //     alert("No Value");
        // }
        
        
    }
    
    return(
        <div id="mainDiv">
            <div id="lbl">
            <h1>{(newvalue)}</h1>
            </div>
            <div id="btn">
            <button id="btnPlus" onClick={handleonclickup}>+</button>
            <button id="btnMin" onClick={handleonclickdown}>-</button>
            </div>
            
        </div>
    );
}