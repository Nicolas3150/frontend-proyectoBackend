import React from 'react'
import { admin } from '../../services'
import { API_URL } from '../../services'
import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({ item }) => {

    const deleteProduct = (id) => {
        fetch(`${API_URL}/productos/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(datos => window.location.reload())
            .catch(err => {
                console.log(err);
            });
    }

    const handleAddProductToCart = (id_prod) => {
        const data = new FormData();
        data.append('id_prod', `${id_prod}`)
        const d = new URLSearchParams(data)
        let id = prompt('Ingrese el id de su carrito')
        fetch(`${API_URL}/carrito/${id}/productos`, {
            method: 'POST',
            body: d
        })
            .then(response => response.json())
            .then(datos => console.log(datos))
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className='card'>
            <div className='img-container'>
                <img className='product-img' src={item?.thumbnail} alt="Imagen del producto" />
            </div>
            <div className="product-price">
                <p>${item?.price}</p>
            </div>
            <div className='description-container'>
                <p className="product-name">{item?.title}</p>
                <div className='product-stock'>
                    <hr />
                    <p>stock: {item?.stock}</p>
                </div>
            </div>
            <div className='divButton'>
                <button onClick={() => handleAddProductToCart(item.id)} className="btnAdd">Agregar al carrito</button>
                <Link to={`/${item.id}`}><button className='btnSee'>Ver producto</button></Link>
            </div>
            {admin ? <div className='adminBtn'>
                <button onClick={() => deleteProduct(item.id)}>Eliminar</button>
                <Link to={`/${item.id}`}><button>Modificar</button></Link>
            </div> : <></>}
        </div>
    )
}

export default Item