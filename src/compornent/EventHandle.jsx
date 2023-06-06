export const EventHandle=()=>{
    const handleOnClick=()=>{
        alert("Nav");
    }
    const handleOnClickSubmit=(e)=>{
        e.stopPropagation()
        alert("Submit");
    }
    const handleOnClickReset=(e)=>{
        e.stopPropagation()
        alert("Reset");
    }
    return(
        <div>
            <div className="nav-bar" onClick={handleOnClick}>
                <button className="btnSabmit" type="submit" onClick={handleOnClickSubmit}>Submit</button>
                <button className="btnReset" type="reset" onClick={handleOnClickReset}>Reset</button>
            </div>
        </div>
    )
}