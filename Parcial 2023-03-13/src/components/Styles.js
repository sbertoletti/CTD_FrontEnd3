import styled, { css } from "styled-components";

export const MainContainer = styled.form`
    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const Container = styled.div`
    padding: 2rem;
    

    display: flex;
    flex-direction: column;
    align-items: start;

    color: white;
`;

export const Input = styled.input`
    height: 3rem;
    width: 95%;

    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 20px;
    outline: none;
    border: 0px; 
    background-color: #CBE4DE;

    color: black;
`;

export const Form = styled.form`
    margin: 5%;
    
    background-color: #2E4F4F;
    
`;

export const Button = styled.button`
    height: auto;
    width: auto;
    padding: 0.5rem;
    margin: 1%;

    background-color: #0E8388;
    color: white;
    font-size: 1rem;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    text-align: center;

`;

export const Foot = styled.footer`
    margin: 10%;
    color: white;
    font-size: 1.5rem;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    text-align: center;

`;
