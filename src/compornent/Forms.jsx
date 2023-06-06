import { useState , useEffect } from "react";

export const Forms=()=>{

    const [name,setName]= useState("")
    const [address,setAddress]= useState("")
    const [email,setEmail]= useState("")
    const [age,setAge]= useState("")
    
    const handleOnClickSubmit=(e)=>{
        e.stopPropagation()
    }
    const handleOnClickReset=(e)=>{
        e.preventDrfault();
        
    }
    const getDetails={
        formName:name,
        formAddress:address,
        formEmail:email,
        formAge:age
    }
    console.log(getDetails)


    return(
        <div>
            <div className="nav-bar">
                <button className="btnSabmit" type="button" onClick={handleOnClickSubmit}>Forms</button>
                <button className="btnReset" type="button" onClick={handleOnClickReset}>Other</button>
            </div>
            <div className="col"></div>

            <div id="div2" className="col">
                <div id="d1" className="row">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="txtName" 
                    value={name}  
                    onChange={e=>setName(e.target.value)}
                    />
                </div>
                <div id="d2" className="row">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="txtAddress" 
                    value={address} 
                    onChange={e=>setAddress(e.target.value)}
                    />
                </div>
                <div id="d3" className="row">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control"  id="txtEmail" 
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />
                </div>
                <div id="d4" className="row">
                    <label for="age" class="form-label">Age</label>
                    <input type="number" class="form-control" id="txtAge" 
                    value={age}
                    onChange={e=>setAge(e.target.value)}
                    />
                </div>
                <div id="d4" className="row">
                <button className="btnSabmit" type="submit" onClick={handleOnClickSubmit}>Submit</button>
                <button className="btnReset" type="reset" onClick={handleOnClickReset}>Reset</button>
                </div>
            </div>

        </div>
    );
}