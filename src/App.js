import "./App.css";
import HeaderComponent from "./Components/header";
import Notes from "./Components/notes";
import TaskList from "./Components/taksList";
export default function App (){
  return(
    <>
      {HeaderComponent()}
      {Notes()}
      {TaskList()}
    </>
  )
}