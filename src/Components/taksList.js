import React,{useState} from "react"
import { MainContainer, FormContainer, FormBox, AddButton, ListBlock, TrashButton } from "./styles";
import { FaPlus, FaTrash } from "react-icons/fa";
export default function TaskList(){
    const [input, setInput] = useState();
  const [task, setTask] = useState([]);
  const addTask = () => {
    if (!input) {
      return;
    }
    let taskList = {
      value: input,
      id: Math.random()
    };
    setTask((prevState) => [...prevState, taskList]);
    setInput("");
  };
  const delTask = (id) => {
    let listFilter = task.filter((rastreador) => rastreador.id !== id);
    setTask(listFilter);
  };
  return(
    <MainContainer>
        <FormContainer onSubmit={(e) => e.preventDefault()}>
            <FormBox>
                <label> Nova Tarefa </label>
                <input
                    value={input}
                    onChange={(e) => { setInput(e.target.value);}}
                    placeholder="adicionar tarefa"
                />
                <label> Descrição da tarefa</label>
                <textarea />
                <label> Data</label>
                <input type="date" />
            </FormBox>
            <AddButton onClick={() => {addTask();}}>
                Adiconar Tarefa
            </AddButton>
      </FormContainer>
    <ListBlock>
        <ul>
          {task.map((items) => (
            <div className="divli">
              <div>
                    <li>
                        {items.value}
                            <div>
                                <input type="checkbox" />
                                <TrashButton onClick={() => {delTask(items.id);}}>
                                    <FaTrash />
                                </TrashButton>
                        </div>
                    </li>
                </div>
            </div>
          ))}
        </ul>
    </ListBlock>
    </MainContainer>
  );
}