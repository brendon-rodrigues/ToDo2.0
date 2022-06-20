import "./App.css";
import {Routes, Route} from "react-router-dom"
import HeaderComponent from "./Components/header";
import Notes from "./Components/notes";
import TaskList from "./Components/taksList";
export default function App (){
  return(
    <>
      {HeaderComponent()}
      {Notes()}
      {TaskList()}
      <Routes>
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/notes" element={<Notes />} />
        </Routes>
    </>
  )
}