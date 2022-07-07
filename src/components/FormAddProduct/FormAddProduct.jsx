import React from 'react'
import { API_URL } from '../../services';
import './FormAddProduct.css'


const FormAddProduct = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new URLSearchParams(new FormData(document.getElementById('productForm')))
        fetch(`${API_URL}/productos`, {
            method: 'POST',
            body: data
        }).then(response => response.json())
            .then(datos => {
                console.log(datos)
                window.location.reload()
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className='productForm'>
            <form id='productForm' onSubmit={handleSubmit}>
                <input type="text" name='title' placeholder='title' required />
                <input type="text" name='description' placeholder='description' required />
                <input type="text" name='code' placeholder='code' required />
                <input type="text" name='thumbnail' placeholder='url imagen' required />
                <input type="number" name='price' placeholder='price' required />
                <input type="number" name='stock' placeholder='stock' required />
                <input type="submit" value='Agregar producto' className='btn' />
            </form>
        </div>
    )
}

export default FormAddProduct