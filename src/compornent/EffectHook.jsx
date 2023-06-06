import { useState , useEffect } from "react";

export const EffectHook=()=>{

    const [value,setValue]= useState("")
    const [data,setData]= useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${value}`)
            .then(response => response.json())
            .then(json => setData(json))
    },[value])

    
    return(
        <>
        <div id="mainDiv1">
            <div id="div1">
            <button id="btnPost" onClick={()=> setValue("posts")}>post</button>
            <button id="btnComments" onClick={()=> setValue("comments")}>comments</button>
            <button id="btnPhotos" onClick={()=> setValue("photos")}>photos</button>
            <button id="btnNews" onClick={()=> setValue("news")}>news</button>
                <h1 id="h1">{(value)}</h1>
            </div>
        </div>
        <div>
            <h1>{value}</h1>
            {data.map(details => {
                return <pre>{JSON.stringify(details)}</pre>
            })}
        </div>
        </>
        
    );
}