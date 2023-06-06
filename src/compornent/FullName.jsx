export const FullName=()=>{
    const greeting=()=>{
        if(userName){
                return <h1>Hello {fullName(userName)}</h1>
        }else{
            return <h1>Hello Unknown</h1>
        }
    }
function fullName (userName){
    return userName.fristName+" "+userName.lastName;
  }
  const userName={
    fristName:"Ridmi",
    lastName:"Rangana",
    propertieas:"https://picsum.photos/400/300"
  }
  return (
    <div className="App">
      <h1>{greeting(userName)}</h1>
      <img src={userName.propertieas}></img>
    </div>
  );
}
export default FullName;