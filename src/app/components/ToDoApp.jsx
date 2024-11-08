"use client";
import { useState } from "react";
import List from "./List";
import { motion } from "framer-motion";


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
    <motion.form onSubmit={addTask} className="border px-8 py-8"
    initial= {{width: "0%", opacity: 0}}
    animate = {{width: "60%", opacity: 1}}
    transition={{
        type: "spring",
        stiffness: 120,
        damping: 25,
        delay: 0.5
    }}
    >
        <List tasks={tasks} setTasks={setTasks}/>
        <motion.input type="text"
        name="task"
        placeholder="Add a new task"
        className="py-2 px-4 border border-blue-700 rounded text-blue-700"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }} 
        transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 2.5
        }}/>
        <motion.button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 border border-blue-700 rounded" initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 3
        }}>Add Task</motion.button>
    </motion.form>
    </>
    );
}
 
export default ToDoApp;