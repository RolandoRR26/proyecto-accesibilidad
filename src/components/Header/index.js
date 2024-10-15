import { HeaderContainer, Nav, NavList, NavLink } from "./styles";
const Header = () => {

    return (
        <HeaderContainer role="banner" aria-label="Encabezado principal">
            <Nav aria-label="Menú principal">
                <NavList>
                    <li>
                        <NavLink href="/">Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink href="products">Productos</NavLink>
                    </li>
                    <li>
                        <NavLink href="contact">Contacto</NavLink>
                    </li>
                </NavList>
            </Nav>
        </HeaderContainer>
    );

}

export default Header;