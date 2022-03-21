import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
// import { LoginSincrono } from '../redux/actions/actionsLogin';
import { loginEmailPassword, loginFacebook, loginGoogle } from '../redux/actions/actionLogin';


const Login = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (data) => {
            dispatch(loginEmailPassword(data))
        },

    })

    const handleGoogle = () => {
        dispatch(loginGoogle())
    }

    const handleFacebook = () => {
        dispatch(loginFacebook())
    }

    return (
        <div className="my-5 w-100">
            <Form className="my-5 form py-2 w-50 mx-auto" onSubmit={formik.handleSubmit}>
                <div className="auth__social-networks">
                    <div className="google-btn" onClick={handleGoogle}>
                        <div className="google-icon-wrapper py-2 google">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" /> Iniciar con Google
                        </div>
                    </div>
                </div>
                <div className="auth__social-networks">
                    <div className="facebook-btn" onClick={handleFacebook}>
                        <div className="facebook-icon-wrapper py-2 facebook">
                            <img className="facebook-icon" src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="facebook button" /> Iniciar con Facebook
                        </div>
                    </div>
                </div>
                <div className='mx-auto w-75'>
                    <div className="mx-auto w-75">
                        <Form.Group className="mb-3 mx-auto w-75" controlId="formBasicEmail">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                onChange={formik.handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3 mx-auto w-75" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={formik.handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3 mx-auto w-75">
                            <Button variant="success" className="w-100" type="submit">
                                Enviar
                            </Button>
                        </Form.Group>
                        <p className="text-center">¿no tienes cuenta? <Link className="link-success" to="/register">Registrate</Link></p>
                    </div>
                </div>

            </Form>
        </div>

    );
}

export default Login;