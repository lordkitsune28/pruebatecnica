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
                    <Link className='link-light fw-bolder text-decoration-none mx-5' to="/">Inicio</Link>
                    <Link className='link-light fw-bolder text-decoration-none mx-5' to="/recibo">Recibo</Link>
                    <button type="button" class="btn btn-outline-light" onClick={handleLogout}>Cerrar Sesión</button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
