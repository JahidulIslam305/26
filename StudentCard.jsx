function StudentCard({student,onDelete}){

    return(

        <div className="card">

            <h2>{student.name}</h2>

            <p>Department : {student.department}</p>

            <p>CGPA : {student.cgpa}</p>

            {/* Ternary */}

            <p>
                {student.isActive ? "Active" : "Inactive"}
            </p>

            {/* Logical && */}

            {student.cgpa>3.5 &&

                <p>Excellent Student</p>

            }

            {/* IIFE */}

            {

                (()=>{

                    if(student.cgpa>=3.75){

                        return <p>Merit Student</p>

                    }

                    return <p>Regular Student</p>

                })()

            }

            <button onClick={()=>onDelete(student.id)}>
                Delete
            </button>

        </div>

    )

}

export default StudentCard;