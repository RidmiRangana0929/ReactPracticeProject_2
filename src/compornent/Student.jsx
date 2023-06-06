export const Student=(props)=>{
    console.log(props);
    return(
        <table>
       <tr>
        <th className="head">Name</th>
        <th className="head">Course</th>
        <th className="head">Batch</th>
        <th className="head">Address</th>
        </tr>
        <tr>
        <th className="content">{props.name}</th>
        <th className="content">{props.course}</th>
        <th className="content">{props.batch}</th>
        <th className="content">{props.address}</th>
        </tr> 
    </table>
    );
}

export default Student;