import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { deleteProduct } from '../redux/actions/actionProduct';
import Editar from './Editar';

export const Listarproductos = () => {
    const dispatch = useDispatch();

    const [modal, setModal] = useState(false)
    const [enviarDatosModal, setEnviarDatosModal] = useState([])

    const { product } = useSelector(store => store.producto);
    console.log(product);
    

    useEffect(() => {

    }, [product])

    const editar = (code) => {
        const traerproducto = product.find(t => t.code === code)

        setModal(true)
        setEnviarDatosModal(traerproducto)
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (product) ?
                            (

                                product.map((element, index) => (

                                    <tr key={index}>
                                        <td>{element.pro}</td>
                                        <td>{element.price}</td>
                                        <td>{element.items}</td>
                                        <td><Button onClick={() => dispatch(deleteProduct(element.pro))}>Eliminar</Button></td>
                                        <td><Button onClick={() => editar(element.code)}>Editar</Button></td>
                                    </tr>
                                )
                                )

                            ) :
                            <p>Datos no disponibles</p>
                    }
                </tbody>
            </Table>
            {
                modal === true ? <Editar modal={enviarDatosModal} /> : ''
            }
        </div>
    )
}
