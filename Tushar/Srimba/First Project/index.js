
function Navbar() {
    return (
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
    )
}

function Maincontent(){
    return(
        <h1> Main Content of Page </h1>
    )
}

ReactDOM.render(<div>
        <Navbar/> 
        <Maincontent/>
    </div>
    ,document.getElementById("root"))