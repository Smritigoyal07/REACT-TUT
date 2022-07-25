import React, { useState } from 'react';
import Print from './Print'

function Card() {
    let todoobj =
        [
            {
                "name": "Tushar Verma",
                "des": "Nothing to do."
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
                    <h1>Todo</h1>
                    <h1 className="counter">{todolist.length}</h1>
                </header>
                <button onClick={giveinput}>+</button>
                <Print todolist={todolist} />
            </div>
        </div>
    );
}

export default Card;
