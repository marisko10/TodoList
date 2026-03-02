import { useState, useEffect } from 'react';
import './TodoList.css';
import icone from './images/Icon.png';

function TodoList() {
  const [input, setInput] = useState('');
  const [tarefa, setTarefa] = useState(() => {
    const guardarTarefa = localStorage.getItem("tarefa")
    return guardarTarefa ? JSON.parse(guardarTarefa) : [];
  })

  function add() {
    if (input.trim() !== '') {
    const newtarefa = { id: Date.now(), text: input};
    setTarefa([...tarefa, newtarefa]);
    setInput('');
    }}
  
    
    useEffect(() => {
      localStorage.setItem("tarefa", JSON.stringify(tarefa))
     }, [tarefa]);
     

  function remover(id) {
    const removerTarefa = tarefa.filter((todo) => todo.id !== id);
    setTarefa(removerTarefa);
  }

  function apagartodos() {
    setTarefa([]);
  }
    
 

  return (
    <div className="todo">
      <h1>Todo List</h1>
      <div className="input-area">
        <input
          type="text"
          value={input}
          placeholder="Nova tarefa"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="Add" onClick={add}>
          Adicionar
        </button>
      </div>
      {tarefa.length > 0 ? (
        <>
          <ul className="lista">
            {tarefa.map((todo) => (
              <li className="item" key={todo.id}>
                <span>{todo.text} </span>
                <button className="apagar" onClick={() => remover(todo.id)}>
                  X
                </button>
              </li>
            ))}
          </ul>
          <button className="deleteAll" onClick={apagartodos}>
            Apagar Todos
          </button>
        </>
      ) : (
        <img src={icone} alt="Ícone" className="icone" />
      )}
    </div>
  );
}

export default TodoList;
