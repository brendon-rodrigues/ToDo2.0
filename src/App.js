import React, { useState } from "react";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";
import styled from "styled-components";
import "./App.css";
const MainContainer = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  header {
    background-color: #32b9be;
  }
  h1 {
    text-align: center;
    padding: 10px;
  }
`;
const FormContainer = styled.form`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid #000;
  button {
    height: 35px;
    font-weight: 600;
    padding: 5px;
    margin: 5px;
    background: #fff;
    border: none;
    border-radius: 2px;
  }
`;
const FormBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;

  label {
    font-weight: 500;
  }
  input {
    width: 100%;
    height: 5vh;
    margin: 10px 0;
    background: #fff;
    border: none;
  }
  textarea {
    width: 100%;
    background: #fff;
    height: 20vh;
    margin: 10px 0;
    border: none;
    resize: none;
  }
`;
const ListBlock = styled.div`
  width: 100%;
  height: 100%;
  li {
    width: 90%;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    font-size: 1.2em;
    height: 7vh;
    padding: 10px;
    background: #fff;
  }
`;
const AddButton = styled.button`
  height: 35px;
  font-weight: 600;
  padding: 5px;
  margin: 5px;
  background: #fff;
  border: none;
  border-radius: 2px;
`;
const TrashButton = styled.button`
  border: none;
  color: rgb(73, 67, 67);
  background: transparent;
  width: 25px;
  height: 25px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 335px;
  height: 335px;
  padding: 15px;
  margin: 20px;
  background: #5bcebf;
  position: relative;

  h2 {
    text-align: center;
    font-weight: 700;
    padding-bottom: 5px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      background: transparent;
    }
    &:hover::-webkit-scrollbar-thumb {
      background: #fff;
    }
  }
  p {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 5px;
    }
  }
  hr {
    align-self: center;
    width: 80%;
    border-bottom: none;

    margin: 10px;
  }
  button {
    width: 15vw;
    background: none;
    border: none;
    position: absolute;
    top: 87%;
    left: 83%;
  }
  svg {
    width: 10vw;
    height: 3vh;
  }
`;
const inputli = () => {
  return (
    <>
      <div className="inputli"></div>
    </>
  );
};
export default function App() {
  const [inputOne, setInputOne] = useState();
  const [inputTwo, setInputTwo] = useState();
  const [note, setNote] = useState([]);
  const [liinput, setliinput] = useState(false);
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
  }
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
  return (
    <MainContainer>
      <header>
        <h1> Lista de Tarefas e Post-it's </h1>
      </header>
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <FormBox>
          <label> Título </label>
          <input
            name="title"
            value={inputOne}
            onChange={(e) => {
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
        </FormBox>
        <button
          onClick={() => {
            addNote();
          }}
        >
          {" "}
          Adicionar Nota{" "}
        </button>
      </FormContainer>
      <FormContainer onSubmit={(e) => e.preventDefault()}>
        <FormBox>
          <label> Nova Tarefa </label>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="adicionar tarefa"
          />
          <textarea />
          <input type="date" />
        </FormBox>
        <AddButton
          onClick={() => {
            addTask();
          }}
        >
          Adiconar Tarefa
        </AddButton>
      </FormContainer>
      <div>
        {note.map((items) => (
          <Card>
            <h3>{items.title} </h3>
            <hr />
            <p>{items.desc} </p>
            <button
              onClick={() => {
                delNote(items.id);
              }}
            >
              {" "}
              <FaTrash />{" "}
            </button>
          </Card>
        ))}
      </div>

      <ListBlock>
        <ul>
          {task.map((items) => (
            <div className="divli">
              <div>
                <li>
                  {items.value}
                  <div>
                    <input type="checkbox" />
                    <TrashButton
                      onClick={() => {
                        delTask(items.id);
                      }}
                    >
                      {" "}
                      <FaTrash />{" "}
                    </TrashButton>
                    <button
                      onClick={() => {
                        setliinput(!liinput);
                      }}
                    >
                      +
                    </button>
                  </div>
                </li>
              </div>
              {liinput && inputli()}
            </div>
          ))}
        </ul>
      </ListBlock>
    </MainContainer>
  );
}
