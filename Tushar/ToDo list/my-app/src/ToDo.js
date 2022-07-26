import React, { useState } from 'react';
import Print from './Print'

function ToDo() {
    let todoobj =
        [
            {
                "name": "Tushar Verma",
                "des": "Nothing to do. 1"
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
            <div className="box1">
                <header>
                    <h1>Todo</h1>
                    <h1 className="counter">{todolist.length}</h1>
                </header>
                <button onClick={giveinput}>+</button>
                <Print todolist={todolist} />
            </div>
        
    );
}

export default ToDo;
