import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./App.css"; /* essa tag importa o arquivo CSS pra poder fazer a edição e estilização do elementos desse arquivo */
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [tarefas, orgTarefa] = useState([]);
  const [novaTarefa, auxTrefa] = useState("");

  /* variavel para adicionar tarefa */
  const addTarefa = () => {
    orgTarefa([...tarefas, novaTarefa.trim()]);
    auxTrefa("");
  };
  
 /* variavel para adicionar editar */
  const editTarefa = (index, task) => {
    const novaTks = [...tarefas];
    novaTks[index] = task.trim();
    orgTarefa(novaTks);
  };

 /* variavel para adicionar deletar */
  const apagarTarefa = (index) => {
    const novaTks = [...tarefas];
    novaTks.splice(index, 1);
    orgTarefa(novaTks);
  };

  return (
    /* return dá as condições de escrever como se fosse HTML = JSX concede essa possibilidade com algumas resalvas*/
<div className="App">
  {/*  Layout geral */}
  <div className="input">

        <input type="text"
          placeholder="Nova tarefa"
          value={novaTarefa}
          onChange={(event) => auxTrefa(event.target.value)}
        />

        <button id="botaoAdd"
        onClick={addTarefa}>Adicionar tarefa
        </button>

  </div>

  <div className="trf-list">
        {tarefas.map((task, index) => (
    <div key={index} className="bloco-nota">
            <div className="tarefa-recebe">
              <input type="checkbox" /> {task}
            </div>

      {/* Botoes de Editar e Deletar */}
      <div>

      {/*  >>EDITAR<< */}
          <button  id="editar-bnt" onClick={() => editTarefa(index, prompt("Edit task", task))}>
          <FontAwesomeIcon icon={faEdit} />
          </button>

      {/*  >>DELETAR<< */}
          <button id="apagar-bnt" onClick={() => apagarTarefa (index)}>
          <FontAwesomeIcon icon={faTrash} />
          </button>

      </div>
    </div>
        ))}
  </div>
</div>
  );
}

export default App;
