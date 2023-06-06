import {Student} from "./Student";

export const StudentDetails=()=>{
    const student={
        name:"Ridmi Rangana",
        course:"GDSE",
        batch:"59",
        address:"kalutara"
    }
    return(
        <div>
            <Student name={student.name} course={student.course} batch={student.batch} address={student.address}/>
        </div>
    );
}