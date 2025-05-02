import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    //asegura que el texto no este vacio
    //spreed operator
    if (text.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    }
  };

  const toggleTask = (id) => {
    //updatedTasks me devuelve el array actualizado por eso no usamos speedoperator
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        // Creamos una copia de la tarea, cambiando el "completed"
        return { ...task, completed: !task.completed };
      } else {
        // Si no es la tarea que buscamos, la devolvemos igual
        return task;
      }
    });
  
    // Ahora actualizamos el estado con la nueva lista de tareas
    setTasks(updatedTasks);
  };
  

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };


  //le paso la funcion addTask con el nombre onAdd
  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <TaskInput onAdd={addTask} /> 
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;





