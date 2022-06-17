import React, {useState} from "react"
import HeaderComponent from "./Components/header"
import TaskList from "./Components/listaDeTarefas"
import {createGlobalStyle} from "styled-components"
const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,600&display=swap");
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
`;
export default function App(){
  return(
    <>
      <GlobalStyle />
      {HeaderComponent()}
      {TaskList()}
    </>
  )
}