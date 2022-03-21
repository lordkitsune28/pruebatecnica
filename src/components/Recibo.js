import React, { useEffect } from 'react'
import { Listarproductos } from './Listarproductos';
import { listProducts } from '../redux/actions/actionProduct';
import { useDispatch } from 'react-redux';


export const Recibo = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])
    return (
        <div>
            <div>
                <h1>Recibo</h1>

                <div>

                    <Listarproductos />

                </div>

                {/* <button className='btn btn-success' onclick={imprimir}>imprimir</button> */}

            </div>
        </div>
    )
}
