import React, {useState} from "react"
import TaskList from "./Components/listaDeTarefas"
export default function App(){
  return(
    <>
      {TaskList()}
    </>
  )
}