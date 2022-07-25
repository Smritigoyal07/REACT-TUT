
function Print(probs) {
    let itemList = probs.todolist.map((item, index) => {
            return (
                <>
                    <div className="parts">
                        <h1>{item.name}</h1>
                        <h2>{item.des}</h2>
                    </div>
                </>
            )
        })

    return (
        <div className="App">
            {itemList}
        </div>
    );
}

export default Print;
