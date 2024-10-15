import { TitleHeader, TitleH2, ParrafP, HomeContainer, ImagesSection } from "./styles";

const Home = () => {
    return (
        <HomeContainer>
            <TitleHeader>Bienvenido a Gatitos Felices</TitleHeader>
            <section>
                <TitleH2>Conócenos</TitleH2>
                <ParrafP lang="en">We love cats and everything about them!</ParrafP>
                <ImagesSection>
                    <img src="/img/gato1.jpg" alt="Gato acostado sobre una almohada" />
                    <img src="/img/gato2.png" alt="Gato jugando con una pelota de estambre" />
                    <img src="/img/gato3.jpg" alt="Gato descansando bajo el sol" />
                </ImagesSection>
            </section>
        </HomeContainer>
    );
};

export default Home;
