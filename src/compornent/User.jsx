export const User=(props)=>{
    console.log(props);
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.address}</h1>
        </div>
    );
}

export default User;