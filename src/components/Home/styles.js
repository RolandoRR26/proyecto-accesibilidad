import styled from 'styled-components';


const TitleHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #9AFFE7;
  background-color: #8F2EFF; 
  text-align: center;
  padding: 20px;
  margin: 0;
  border-radius: 8px;
  font-family: Montserrat;
`;

const TitleH2 = styled.h2`
    color: #BDFFEF;
    font-family: Montserrat;
`;

const ParrafP = styled.p`
color: #BDFFEF;
    font-family: Montserrat;
`;

const HomeContainer = styled.section`
  background-color: #8F2EFF;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;


const ImagesSection = styled.section`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;

  img {
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export { TitleHeader, TitleH2, ParrafP, HomeContainer, ImagesSection };