import {User} from "./User";

export const UserDetails=()=>{
    const user={
        name:"Ridmi",
        age:"23",
        address:"Kalutara"
    }
    return(
        <div>
            <User name={user.name} age={user.age} address={user.address}/>
        </div>
    );
}