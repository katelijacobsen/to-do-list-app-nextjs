"use client";
import { useState } from "react";
import List from "./List";


const ToDoApp = () => {
    //let's hook them up, rawr xD
    const [tasks, setTasks] = useState([]);

    //create Task
    const addTask = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const taskText = formData.get("task");

        //new task w/unique ID
        const newTask = {
            id: crypto.randomUUID,
            text: taskText,
            completed: false
        };

        setTasks([...tasks, newTask]);
        event.target.reset(); // refresh input
    }
    return ( 
    <>
    <form onSubmit={addTask}>
        <List tasks={tasks} setTasks={setTasks}/>
        <input type="text" name="task" placeholder="Add a new task" className="py-2 px-4 border border-blue-700 rounded"/>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Add Task</button>
    </form>
    </>
    );
}
 
export default ToDoApp;