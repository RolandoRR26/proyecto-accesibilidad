import styled from "styled-components";

const ProductsContainer = styled.section`
  background-color: #8F26FF; 
  padding: 20px;
  font-family: Montserrat;
  font-size : 1.5rem; 
  justify-content: center;
  color:  #9AFFE7;
  font-weight: bold;
`

const TitlteH1Products = styled.h1`
    text-align: center;
    padding-bottom: 4rem;
`;

const Images = styled.img`
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding-left: 5rem;
`;

export {ProductsContainer, TitlteH1Products, Images};