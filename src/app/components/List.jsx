import React from "react";
import { motion } from "framer-motion";
import ListItem from "./ListItem";

const List = ({ tasks, setTasks }) => {
  // fjern task
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // toggle
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
    <motion.h2 className="text-5xl font-bold"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 120,
      damping: 20,
      bounce: 3.0,
      delay: 1,
    }}
    >Lists</motion.h2>
      <motion.h3 className="text-3xl  font-bold py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 50,
        bounce: 3.0,
        delay: 1.7,
      }}>Ongoing Tasks</motion.h3>
      <ul>
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <ListItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          ))}
      </ul>
      <motion.h3 className="text-3xl font-bold py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 50,
        bounce: 3.0,
        delay: 2,
      }}>Finished Tasks</motion.h3>
      <ul>
        {tasks
          .filter((task) => task.completed)
          .map((task) => (
            <ListItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          ))}
      </ul>
    </>
  );
};

export default List;
