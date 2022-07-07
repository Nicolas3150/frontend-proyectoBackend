import React from 'react'
import { useState } from 'react';
import { API_URL } from '../../services';
import ItemCart from '../../components/ItemCart/ItemCart';
import './Cart.css'

const Cart = () => {
  const [cart, setCart] = useState([])

  const newCart = () => {
    fetch(`${API_URL}/carrito`, {
      method: 'POST'
    }).then(response => response.text())
      .then(datos => console.log(datos))
      .catch(err => {
        console.log(err);
      });
  }

  const getProductInCart = (e) => {
    e.preventDefault()
    let id = document.querySelector('#id_cart')
    fetch(`${API_URL}/carrito/${id.value}/productos`, {
      method: 'GET'
    }).then(response => response.json())
      .then(datos => {
        console.log(datos)
        setCart(datos)
      })
      .catch(err => {
        console.log(err);
      });
  }

  const deleteCart = () => {
    let id = prompt("Ingresa el id a eliminar")
    fetch(`${API_URL}/carrito/${id}`, {
      method: 'DELETE'
    }).then(response => response.text())
      .then(datos => {
        console.log(datos)
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className='FormSearch'>
        <form>
          <label>Ingrese el id de su carrito: </label>
          <input type="number" name='id' id='id_cart' />
          <input type="submit" value='Buscar' className='btn' onClick={getProductInCart} />
        </form>
        <button onClick={newCart}>Crear nuevo carrito</button>
        <button onClick={deleteCart}>Eliminar carrito</button>
      </div>
      <div className='ItemsContainer'>
        {cart.length === 0 ? <h2>No hay productos en el carrito</h2> :
          cart.error ? <h2>No existe el carrito</h2> :
            cart.map(prod => <ItemCart key={`cart-${prod.id}`} item={prod} id_cart={document.querySelector('#id_cart').value} />)}
      </div>
    </div>
  )
}

export default Cart