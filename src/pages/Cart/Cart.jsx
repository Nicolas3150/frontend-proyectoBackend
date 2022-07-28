import React from 'react'
import { useState, useEffect } from 'react';
import { API_URL } from '../../services';
import ItemCart from '../../components/ItemCart/ItemCart';
import './Cart.css'

const Cart = () => {
  const [cart, setCart] = useState([])
  const [cartCollection, setCartCollection] = useState([])

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

  useEffect(() => {
    fetch(`${API_URL}/carrito`)
      .then(response => response.json())
      .then(carts => {
        setCartCollection(carts)
      })
  }, [])

  const changeIdCart = () => {
      const text = document.querySelector('#idSelect').value
      document.getElementById('id_cart').value = text
  }

  return (
    <div>
      <div className='FormSearch'>
        <form>
          <label>Seleccione el id de su carrito: </label>
          <select id="idSelect" onChange={ changeIdCart }>
            {cartCollection.map(cart => <option value={cart.id}>{cart.id}</option>)}
          </select>
          <label> o ingreselo manualmente: </label>
          <input type="text" name='id' id='id_cart'/>
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