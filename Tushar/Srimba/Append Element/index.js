var x= "hello"
function Text()
{
    return (
        <div>
            <h1>This is  </h1>
            <ul>
                <li>{x}</li>
                <li>Second</li>
            </ul>
        </div>
    );
    
}

ReactDOM.render(
    <Text />,
    <Text />,<Text />,<Text />
    ,document.getElementById("root"))