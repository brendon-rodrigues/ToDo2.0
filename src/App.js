import "./App.css";
import {Router, Routes, Route, Link} from "react-router-dom"
import HeaderComponent from "./Components/header";
import Notes from "./Components/notes";
import TaskList from "./Components/taksList";
export default function App (){
  return(
    <>
      {HeaderComponent()}
      <nav>
        <Link to="/tasks" >Tarefas</Link>
        <Link to="/notes">Notas</Link>
      </nav>
      <Routes>
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  )
}