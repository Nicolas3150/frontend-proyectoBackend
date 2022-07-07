import React from 'react'
import { API_URL } from '../../services'
import './ItemCart.css'

const ItemCart = ({ item, id_cart}) => {
    const deleteProductoInCart = (id_prod) => {
        const id = id_cart
        fetch(`${API_URL}/carrito/${id}/productos/${id_prod}`, {
            method: 'DELETE'
        })
            .then(response => response.text())
            .then(datos => window.location.reload())
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <>
         <div className='itemCartContainer'>
            <div className='itemImg'>
                <img src={item.thumbnail} alt="" />
                <div className='itemName'>
                    <p>{item.title}</p>
                    <button onClick={() => deleteProductoInCart(item.id)}>Remover producto</button>
                </div>
                <p className='item-price'>${item.price}</p>
            </div>
        </div>
        
        {/* <div>
            <ul>
                <li>{item?.title}</li>
                <li>{item?.description}</li>
                <li>{item?.code}</li>
                <li>{item?.thumbnail}</li>
                <li>{item?.price}</li>
                <li>{item?.stock}</li>
            </ul>
            <button onClick={() => deleteProductoInCart(item.id)}>Eliminar producto</button>
        </div> */}
        </>
    )
}

export default ItemCart