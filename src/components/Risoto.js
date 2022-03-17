import React, { useEffect, useState } from 'react'
import { url } from '../helpers/link';

export const Risoto = () => {
    const [nombre, setNombre] = useState([]);
    const [envio, setEnvio] = useState([]);
    const [ingredientes, setIgredientes] = useState([]);
    const [select, setSelect] = useState([]);

    const getData = async () => {
        let res = await fetch(url);
        let data = await res.json();
        const nomb = data.name
        const env = 7
        const ingr = data.ingredients
        setNombre(nomb)
        setEnvio(env)
        setIgredientes(ingr)

    }

    useEffect(() => {
        getData();
    }, [])

    const comprobar = () => {
        if (condition) {
            
        } else {
            
        }
    }

    return (
        <div className='w-100 mt-5'>
            <div className='w-75 mx-auto'>
                <div className='w-75 mx-auto'>
                    <div>
                        <p>INGREDIENTES</p>
                        <h1>{nombre}</h1>
                        <div>
                            <p className="d-inline-block me-2">Seleccionar todo </p>|<p className="d-inline-block mx-2">Deseleccionar todo</p>
                        </div>
                    </div>

                    <div>
                        {
                            ingredientes.map((charap, index) => (
                                <div key={index} class="form-check my-5 p-5 border border-1 animate__animated animate__fadeIn">
                                    <div className='w-100'>
                                        <div className='d-inline-block ms-1 mt-4'>
                                            <input className="form-check-input me-0 pe-0" type="checkbox" value={charap.price} id="flexCheckDefault" />
                                        </div>
                                        <div className='d-inline-block text-start'>
                                            <label className="form-check-label" for="flexCheckDefault">
                                                {charap.product}
                                            </label>
                                            <p className='my-0'>{charap.brand}</p>
                                            <p className='mt-0 mb2'>{charap.quantity}</p>
                                        </div>
                                        <div className='d-inline-block w-50 mx-auto '>
                                            <h2 className='text-center'>{charap.price}€</h2>
                                        </div>
                                        <div className="btn-group-vertical d-inline-block float-end">
                                            <button type="button" class="btn btn-primary p-2 d-block me-5 mb-1"> + </button>
                                            <button type="button" class="btn btn-secondary p-2 d-block me-5 mt-1"> - </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div>
                        <p>Items: </p>
                        <p>SubTotal: </p>
                        <p>Gastos de Envío: {envio}</p>
                        <p><strong>Total</strong></p>

                        <button type="submit" className='btn btn-success'>Comprar Ingredientes: </button>
                    </div>
                </div>
            </div>
        </div >
    )
}
