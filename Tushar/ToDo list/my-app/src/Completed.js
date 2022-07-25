import React, { useState } from 'react';
import Print from './Print'

function Completed() {
    let todoobj =
        [
            {
                "name": "Smriti Goyal",
                "des": "Front end"
            },
            {
                "name": "Smriti Goyal",
                "des": "Front end"
            },

        ]
    let [todolist, settodoobj] = useState(todoobj);
    let giveinput = () => {
        let x = prompt("enter name")
        let y = prompt("enter dis")
        let temp = {
            "name": x,
            "des": y
        }
        settodoobj((todolist) => {
            return [...todolist, temp]
        })
        console.log(todolist)
    }
    return (
        <div className="App">
            <div className="box">
                <header>
                    <h1>Completed</h1>
                    <h1 className="counter">{todolist.length}</h1>
                </header>
                <button onClick={giveinput}>+</button>
                <div className="data">
                    <Print todolist={todolist} />
                </div>
            </div>
        </div>
    );
}

export default Completed;
