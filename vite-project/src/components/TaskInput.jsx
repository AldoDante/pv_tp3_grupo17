import { useState } from 'react';

//recibo el propt desestructurando en los parametros
const TaskInput = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText('');
  };
  //console.log(text)
  //cuando el user apreta enter o enviar se ejecuta esa funcion
  return (
    <form onSubmit={handleSubmit}> 
      <input 
        type="text" 
        placeholder="Nueva tarea..." 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
  
};

export default TaskInput;
