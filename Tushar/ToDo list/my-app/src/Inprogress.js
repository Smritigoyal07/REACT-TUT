import React, { useState } from 'react';
import Print from './Print'

function Inprogress() {
    let todoobj =
        [
            {
                "name": "Parth Gandi",
                "des": "Data science"
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
            <div className="box2">
                <header>
                    <h1>InProgress</h1>
                    <h1 className="counter">{todolist.length}</h1>
                </header>
                <button onClick={giveinput}>+</button>
                <Print todolist={todolist} />
            </div>
    );
}

export default Inprogress;
