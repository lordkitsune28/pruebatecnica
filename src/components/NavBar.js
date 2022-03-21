import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/actionLogin';

export const NavBar = (history) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        history.replace('/login');
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Nuestro Mercado Favorito</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Link to="/recibo">Recibo</Link>
                    <Navbar.Text onClick={handleLogout} href="#">Cerrar Sesión</Navbar.Text>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
