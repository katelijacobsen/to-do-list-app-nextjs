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
      <h2 className="text-3xl  font-bold">Ongoing Tasks</h2>
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
      <h2 className="text-3xl font-bold">Finished Tasks</h2>
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