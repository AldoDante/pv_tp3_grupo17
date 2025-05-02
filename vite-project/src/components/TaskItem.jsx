const TaskItem = ({ task, onToggle, onDelete }) => {
    //recibo la lista de objetos(cada tarea es un objeto) y las props(funciones enviadas de app a tasklist a taskItem)
      return (
        <li>
          <span 
            onClick={() => onToggle(task.id)} //al hacer click llama a la funcion onToggle
            style={{ 
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
          >
            {task.text}
          </span>
          <button onClick={() => onDelete(task.id)}>Eliminar</button>
        </li>
      );
    };
    
  export default TaskItem;