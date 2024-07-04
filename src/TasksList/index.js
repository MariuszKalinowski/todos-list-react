import "./style.css";


const TasksList = ({tasks, hideDone, removeTask }) => (
    
    <ul className="tasksList">
        {tasks.map(task => (
            <li className={`tasksList__task 
            ${task.done ? "tasksList__task--done" : ""} 
            ${hideDone && task.done ? "tasksList__task--hidden" : ""}
            `}
                key={task.id}>
                <button className="tasksList__doneTaskButton">
                    {task.done ? "✔" : ""}
                </button>

                <span className="tasksList__taskContent">
                    {task.content}
                </span>

                <button className="tasksList__removeTaskButton" 
                onClick={() => removeTask(task.id)}> 🗑 </button>
            </li>
        ))}
    </ul>
);

export default TasksList;