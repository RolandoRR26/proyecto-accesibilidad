import { ContactContainer, FormDiv, FormInput, FormTextArea, FormInputName, FormLabelTextArea, FormButton } from "./styles";
const Contact = () => {

    return (
        <ContactContainer>
            <h1>Contáctanos</h1>
            <form action="#" method="POST">
                <FormDiv>
                    <label for="nombre">Nombre:</label>
                    <FormInputName type="text" id="nombre" name="nombre" required />
                </FormDiv>
                <FormDiv>
                    <label for="email">Correo Electrónico:</label>
                    <FormInput type="email" id="email" name="email" required />
                </FormDiv>
                <FormDiv>
                    <FormLabelTextArea for="mensaje">Mensaje:</FormLabelTextArea>
                    <FormTextArea id="mensaje" name="mensaje" rows="5" required></FormTextArea>
                </FormDiv>
                <FormButton type="submit" aria-label="Enviar formulario de contacto">Enviar</FormButton>
            </form>
        </ContactContainer>
    );

}

export default Contact;