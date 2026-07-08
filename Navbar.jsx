function Navbar({totalStudents}){

    return(
        <nav className="navbar">
            <h2>Student Dashboard</h2>

            <h3>Total Students : {totalStudents}</h3>
        </nav>
    )
}

export default Navbar;