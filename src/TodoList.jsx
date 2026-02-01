import React, { useState } from "react";
import "./TodoList.css";
import icone from "./assets/Icon.png";

function TodoList() {
  const [lista, setLista] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function adicionarTarefa(e) {
    e.preventDefault();
    if (inputValue === "") return;

    setLista([...lista, inputValue]);
    setInputValue("");
  }

  function apagarTarefa(index) {
    const novaLista = lista.filter((_, i) => i !== index);
    setLista(novaLista);
  }

  function apagarTodos() {
    setLista([]);
  }

  return (
    <div className="todo">
      <h1>Lista de Tarefas</h1>

      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button type="submit" className="Add">Add</button>
      </form>


      {lista.length === 0 ? (
        <img className="icone" src={icone} alt="icone" />
      ) : (
        <div className="lista">
          {lista.map((tarefa, index) => (
            <div key={index} className="item">
              <span>{tarefa}</span>
              <button
                className="apagar"
                onClick={() => apagarTarefa(index)}
              >
                Apagar
              </button>
            </div>
          ))}
        </div>
      )}

      <button className="apagartodos" onClick={apagarTodos}>
        Apagar Todos
      </button>
    </div>
  );
}

export default TodoList;
