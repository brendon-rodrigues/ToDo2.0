import React, {useState} from "react"
import Header from "./Components/hearder"
import TaskList from "./Components/listaDeTarefas"
export default function App(){
  return(
    <>
      {Header()}
      {TaskList()}
    </>
  )
}