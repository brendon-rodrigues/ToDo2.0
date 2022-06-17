import React from "react"
import styled from "styled-components"
const Header = styled.header`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #32b9be;
    color: #fff;
`;
const HeaderComponent = ()=>{
    return(
        <Header>
            <h1> ToDo List </h1>
        </Header>
    );
};
export default HeaderComponent