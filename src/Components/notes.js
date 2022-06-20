import React, {useState} from "react"
import { MainContainer, FormContainer, FormBox, Card } from "./styles";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";
export default function Notes() {
    const [inputOne, setInputOne] = useState();
    const [inputTwo, setInputTwo] = useState();
    const [note, setNote] = useState([]);
    const addNote = () => {
      let notes = {
        title: inputOne,
        desc: inputTwo,
        id: Math.random()
      };
      setNote((prevState) => [...prevState, notes]);
      setInputOne("");
      setInputTwo("");
      console.log(note);
    };
    function delNote(id) {
      let notesFilter = note.filter((rastreador) => rastreador.id !== id);
      setNote(notesFilter);
    };
    return (
      <MainContainer>
        <FormContainer onSubmit={(e) => e.preventDefault()}>
            <FormBox>
                <label> Título da Nota </label>
                <input
                name="title"
                value={inputOne} onChange={(e) => {
                    setInputOne(e.target.value);
                }}
                />
          </FormBox>
          <FormBox>
                <label> Descrição </label>
                <textarea
                    value={inputTwo}
                    onChange={(e) => {
                        setInputTwo(e.target.value);
                    }}
                 />
                 <label> Data</label>
                <input type="date" />
          </FormBox>
          <button onClick={() => {addNote();}}>
            Adicionar Nota
          </button>
        </FormContainer>
        <div>
          {note.map((items) => (
            <Card>
              <h3>{items.title} </h3>
              <hr />
              <p>{items.desc} </p>
              <button onClick={() => { delNote(items.id);}}>
                <FaTrash />
              </button>
            </Card>
          ))}
        </div>
      </MainContainer>
    );
  }
  