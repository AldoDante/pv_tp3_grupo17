import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  //recibo mi lista de arrays con objetos, cada tarea es un objeto dentro de un array 
  //dentro del map pongo mi otro componente y les mando las props que recibi (funciones)
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem 
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;