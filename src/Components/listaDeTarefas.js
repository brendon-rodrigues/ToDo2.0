import React, {useState} from "react";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";
import styled from "styled-components"
const Container = styled.section`
    display: flex;
    justify-content: space-around;
`
const Form = styled.form`
    width: 50%;
    height: 50vh;
    background: #32b9be;
    margin: 10px;
    padding: 15px;
    input, label{
        margin: 10px
    }
   
`
const ListBlock = styled.div`
    width: 50%;
    height: 100%;
  li {
    width: 90%;
    height: 20vh;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    font-size: 1.2em;
    height: 7vh;
    padding: 10px;
    background: #32b9be;
  }
`;
const TrashButton = styled.button`
    border: none;
    color: rgb(73, 67, 67);
    background: transparent;
    width: 25px;
    height: 25px;
`;
const taskInput = ()=>{
    return(
        <>
            <textarea></textarea>
            <input type="date"/>

        </>
    )
}
export default function TaskList(){
    const [input, setInput] = useState();
    const [task, setTask] = useState([]);
    const [inputli, setInputLi] = useState(false)
    const newTask = ()=>{
        if(!input){
            return alert("Nenhuma tarefa foi adicionada, escreva uma tarefa por favor")
        };
        let taskList = {
            value: input,
            id: Math.random()
        };
        setTask((prevState)=>[...prevState, taskList]);
        setInput("");        
    };
    const delTask = (id)=>{
       let listFilter = task.filter((rastreador)=> rastreador.id !== id);
       setTask(listFilter);
    };
    return(     
        <Container>
            <Form onSubmit={e=>{
                e.preventDefault()
            }}>
                <label>Adicionar Tarefa</label><br/>
                <input name="input" value={input} onChange={e=>{setInput(e.target.value)}}  placeholder="adicionar tarefa"></input>
                <button onClick={()=>{newTask()}}>Add</button>
            </Form>
            
            <ListBlock>
                <ul>
                    {task.map((items) => (
                        <li>
                        {items.value}
                            <div>
                                <input type="checkbox" />
                                <TrashButton onClick={() => { delTask(items.id);}}>
                                    <FaTrash />
                                </TrashButton>
                                <button onClick={()=>{
                                    setInputLi(!inputli)
                                }}>+</button>
                            </div>
                            {inputli && taskInput()}
                        </li>
                     ))}
                </ul>
            </ListBlock>           
        </Container>
    );
}