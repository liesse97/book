import styled from "styled-components";

export const BookLayout= styled.div `
 display: flex;
padding: 3em 0 2em 0;
flex-wrap: wrap;
justify-content: center;
`
export const Book= styled.div `
padding: 0 2em 3em 4em!important;
width:200px;
cursor:pointer;
 transition: transform .5s;
 box-sizing: content-box;


&:hover{
    transform: scale(1.2)

}
`
export const Title= styled.h1`
 text-align: center;
    font-size: 3em;
`
export const Div= styled.div`
 text-align: center;
   
`
export const Input = styled.input`
  padding: 0.5em 0;
  margin: 0.5em 0;
  width:20em;
//   border: none;
//   border-radius: 18px;
`;
export const Butn = styled.button`
  padding: 0.5em 0;
  margin: 0.5em 0;
    width:6em;

//   border: none;
//   border-radius: 18px;
    background-color: green;
    color:#fff;
`;
