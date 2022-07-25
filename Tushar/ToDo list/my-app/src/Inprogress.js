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
        <div className="App">
            <div className="box">
                <header>
                    <h1>In progress</h1>
                    <h2 className="counter">{todolist.length}</h2>
                </header>
                <button onClick={giveinput}>+</button>
                <Print todolist={todolist} />
            </div>
        </div>
    );
}

export default Inprogress;
