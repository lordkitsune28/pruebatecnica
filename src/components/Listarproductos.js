import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { deleteProduct } from '../redux/actions/actionProduct';


export const Listarproductos = () => {
    const dispatch = useDispatch();

    const { product } = useSelector(store => store.producto);
    console.log(product);
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
                                        <td>{element.product}</td>
                                        <td>{element.items}</td>
                                        <td>{element.price}</td>
                                        <td><button onClick={() => dispatch(deleteProduct(element.product))}>Eliminar</button></td>
                                    </tr>
                                )
                                )

                            ) :
                            <p>Datos no disponibles</p>
                    }
                </tbody>
            </Table>
        </div>
    )
}
