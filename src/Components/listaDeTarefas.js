import React, {useState, useEffect} from "react";
export default function TaskList(){
    const [input, setInput] = useState();
    const [task, setTask] = useState([]);

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
    }
    const delTask = (id)=>{
       let listFilter = task.filter((rastreador)=> rastreador.id !== id);
       setTask(listFilter);
    };
    return(     
        <>
            <input name="input" value={input} onChange={e=>{setInput(e.target.value)}}  placeholder="adicionar tarefa"></input>
            <button onClick={()=>{newTask()}}>Add</button>
            <ul>
                {task.map((item)=>(
                    <li>
                        <div>{item.value}
                        <button onClick={()=>{delTask(item.id)}}>Del</button></div>  
                    </li>
                ))}
            </ul>
        </>
    );
}