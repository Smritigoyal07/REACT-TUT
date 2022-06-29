
function Navbar()
{
    return (
        <navbar>
            <img src="https://www.dictionary.com/e/wp-content/uploads/2018/06/pics-300x300.jpg"></img>
            <ul>
                <li>React Course - Project 1</li>
                
            </ul>
            <MainContet />
        </navbar>
    )
}

function MainContet()
{
    return (
        <div class="container">
            <h1> Fun Fact about React</h1>
            <ul>
                <li>first</li>
                <li>second</li>
                <li>third</li>
                <li>forth</li>
            </ul>
        </div>
    )
}


ReactDOM.render(<div>
    <Navbar />
    </div>
    , document.getElementById("root"))