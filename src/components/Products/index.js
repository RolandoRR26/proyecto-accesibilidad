import {ProductsContainer,TitlteH1Products,Images} from "./styles";
const Products = () => {

    return (

        <ProductsContainer>
            <TitlteH1Products>Productos para tu gato</TitlteH1Products>
            <article>
                <h2>Comida Premium</h2>
                <Images src="/img/comida.jpg" alt="Imagen de comida premium para gato"></Images>
                <p>La mejor nutrición para tu amigo peludo.</p>
            </article>
            <article>
                <h2>Juguetes Divertidos</h2>
                <Images src="/img/juguetes.jpg" alt="Imagen de juguetes de gato"></Images>
                <p>¡Horas de diversión garantizada!</p>
            </article>
        </ProductsContainer>
    );

}

export default Products;