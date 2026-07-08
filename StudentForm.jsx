import {useState} from "react";

function StudentForm({addStudent}){

    const[name,setName]=useState("");

    const[department,setDepartment]=useState("");

    const[cgpa,setCgpa]=useState("");

    const handleSubmit=(e)=>{

        e.preventDefault();

        const student={

            id:Date.now(),

            name,

            department,

            cgpa:Number(cgpa),

            isActive:true

        }

        addStudent(student);

        setName("");

        setDepartment("");

        setCgpa("");

    }

    return(

        <form onSubmit={handleSubmit}>

            <input

                type="text"

                placeholder="Student Name"

                value={name}

                onChange={(e)=>setName(e.target.value)}

            />

            <input

                type="text"

                placeholder="Department"

                value={department}

                onChange={(e)=>setDepartment(e.target.value)}

            />

            <input

                type="number"

                placeholder="CGPA"

                value={cgpa}

                onChange={(e)=>setCgpa(e.target.value)}

            />

            <button>Add Student</button>

        </form>

    )

}

export default StudentForm;