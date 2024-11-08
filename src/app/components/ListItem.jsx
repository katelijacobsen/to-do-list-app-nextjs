const ListItem = ({task, deleteTask, toggleTask}) => {
    return ( <li>
        <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</p>
        <button onClick={() => toggleTask(task.id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">
            {task.complete ? "Undo" : "Complete"}</button>
        <button onClick={() => deleteTask(task.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">Delete</button>
    </li> );
}
 
export default ListItem;