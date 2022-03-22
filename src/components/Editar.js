import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useForm } from '../hook/useForm';
import { editAsyn } from '../redux/actions/actionProduct';

const Editar = ({ modal }) => {

    console.log(modal)
    const dispatch = useDispatch()
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const [values, handleInputChange, reset] = useForm({
        items: modal.items,
        price: modal.price,
        pro: modal.pro,
        code: modal.code
    })
    const { items, price, pro, code } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editAsyn(code, values))

        reset()
    }


    return (
        <div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre del producto</Form.Label>
                                <Form.Control type="text" name="pro" placeholder="ingrese el nombre del producto" value={pro} onChange={handleInputChange} />

                                <Form.Label>Cantidad</Form.Label>
                                <Form.Control type="text" name="items" placeholder="ingrese la cantidad" value={items} onChange={handleInputChange} />

                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="text" name="price" placeholder="El precio del producto" value={price} onChange={handleInputChange} />

                            </Form.Group>

                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Form>

                    </Modal.Body>


                </Modal>
            </>
        </div>
    );
};

export default Editar;
