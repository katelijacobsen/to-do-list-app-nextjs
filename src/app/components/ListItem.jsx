const ListItem = ({ task, deleteTask, toggleTask }) => {
  return (
    <li>
      <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.text}
      </p>
      <button
        onClick={() => toggleTask(task.id)}
        className={`font-bold py-2 px-4 border rounded ${
            task.completed 
                ? 'bg-yellow-500 hover:bg-yellow-700 border-yellow-700 text-white' 
                : 'bg-green-500 hover:bg-green-700 border-green-700 text-white'
        }`}
      >
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default ListItem;
