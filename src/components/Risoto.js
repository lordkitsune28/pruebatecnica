import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { url } from '../helpers/link';
import { registerCompra } from '../redux/actions/actionProduct';

export const Risoto = () => {
    const [nombre, setNombre] = useState([]);
    const [envio, setEnvio] = useState();
    const [ingredientes, setIgredientes] = useState([]);
    const [select, setSelect] = useState();
    const [pagar, setPagar] = useState(0);
    const [interruptor, setInterruptor] = useState(true);
    const [items, setItems] = useState(0)
    
    const dispatch = useDispatch();
    let cantidad = 0
    let precioInicial = 0
    let item = 0

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

    const sumar = (e) => {
        precioInicial = Number(e.target.value)
        const productos = e.target.id

        item = 1
        cantidad = Number(cantidad + precioInicial)

        setPagar(Number(pagar) + cantidad)
        setInterruptor(false)
        setItems(items + item)
        enviar(precioInicial, productos, item)
    }

    const restar = (e) => {
        precioInicial = Number(e.target.value)
        const producto = e.target.id
        item = 1

        setPagar(Number(pagar) - precioInicial)
        setItems(items - item)
        enviar(precioInicial, producto, item)
    }

    const comprobar = () => {
        const activar = true
        setSelect(activar)
    }

    const nocomprobar = () => {
        const activar = false
        setSelect(activar)
    }

    const enviar = (precioInicial, productos, item) => {
        const code = parseInt(Math.random() * (50 - 1) + 1)
        dispatch(registerCompra(precioInicial, productos, item, code))
    }

    let total = pagar + envio
    return (
        <div className='w-100 mt-5'>
            <div className='w-75 mx-auto'>
                <div className='w-75 mx-auto'>
                    <div>
                        <p>INGREDIENTES</p>
                        <h1>{nombre}</h1>
                        <div>
                            <p onClick={comprobar} className="d-inline-block me-2">Seleccionar todo </p>|<p onClick={nocomprobar} className="d-inline-block mx-2">Deseleccionar todo</p>
                        </div>
                    </div>

                    <div>
                        {
                            ingredientes.map((charap, index) => (
                                <div key={index} class="form-check my-5 p-5 border border-1 animate__animated animate__fadeIn">
                                    <div className='w-100'>
                                        <div className='d-inline-block ms-1 mt-4'>
                                            <input className="form-check-input me-0 pe-0" checked={select} type="checkbox" value={charap.price} id="flexCheckDefault" />
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
                                            <button type="button" value={charap.price} onClick={(e) => sumar(e)} id={charap.product} class="btn btn-primary p-2 d-block me-5 mb-1"> + </button>
                                            <button type="button" value={charap.price} onClick={(e) => restar(e)} disabled={interruptor} id={charap.product} class="btn btn-secondary p-2 d-block me-5 mt-1"> - </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div>
                        <p>Items: {items}</p>
                        <p>SubTotal: {pagar}</p>
                        <p>Gastos de Envío: {envio}</p>
                        <p><strong>Total: {((total).toFixed(2))}</strong></p>

                        <button type="buttom" className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal">Comprar Ingredientes: {(total).toFixed(2)}</button>
                        
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h1>Los Productos fueron Agregados Exitosamente a su Factura</h1>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                        <Link to="/recibo"><button type="button" className="btn btn-primary" data-bs-dismiss="modal">Ver Factura</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
