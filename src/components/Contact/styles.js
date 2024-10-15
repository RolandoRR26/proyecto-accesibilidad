import styled from "styled-components";

const ContactContainer = styled.section`
    display: block;
    background-color: #8F26FF; 
    padding: 20px;
    font-family: Montserrat;
    color: #9AFFE7; 
`;

const FormDiv = styled.div`
    padding: 1rem;
`;

const FormInput = styled.input`
    margin-left: 0.5rem;
`;
const FormTextArea = styled.textarea`
    margin-left: 0.5rem;
    padding-left: 6rem;
`;
const FormInputName =styled.input`
    padding-left: 6rem;
`;

const FormLabelTextArea = styled.label`
    text-align: start;
`

const FormButton = styled.button`
    width: 22.5rem;
    height: 3rem;
    color: #8F26FF;
    font-family: Montserrat;
    background-color: #9AFFE7;
    font-size: 2rem;
    font-weight: bold;
    border: none;

   &:hover {
    background-color: #FFD0EF
  };


`

export { ContactContainer, FormDiv, FormInput, FormTextArea ,FormInputName,FormLabelTextArea,FormButton};