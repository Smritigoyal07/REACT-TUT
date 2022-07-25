
function Print(probs) {
    let itemList = probs.todolist.map((item, index) => {
        
            return (
                <div className="parts" key={index}>
                        <h2>{item.des}</h2>
                        <h3>{item.name}</h3>
                </div>
            )
        })

    return (
        <div className="App">
            {itemList}
        </div>
    );
}

export default Print;
