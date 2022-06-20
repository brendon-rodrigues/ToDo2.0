import styled from "styled-components"
export const Header = styled.header`
    width: 100%;
    height: 12vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #32b9be;
    color: #000;
    text-align: center;
`;
export const MainContainer = styled.main`
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
export const FormContainer = styled.form`
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
export const FormBox = styled.div`
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
export const ListBlock = styled.div`
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
export const AddButton = styled.button`
  height: 35px;
  font-weight: 600;
  padding: 5px;
  margin: 5px;
  background: #fff;
  border: none;
  border-radius: 2px;
`;
export const TrashButton = styled.button`
  border: none;
  color: rgb(73, 67, 67);
  background: transparent;
  width: 25px;
  height: 25px;
`;
export const Card = styled.div`
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