import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { API_URL } from '../../services';
import './FormPutProduct.css'

const FormPutProduct = ({ item }) => {
    const [itemForm, setItemForm] = useState({
        title: '',
        description: '',
        code: '',
        thumbnail: '',
        price: 0,
        stock: 0
    })

    useEffect(() => {
        setItemForm({
            title: `${item[0]?.title}`,
            description: `${item[0]?.description}`,
            code: `${item[0]?.code}`,
            thumbnail: `${item[0]?.thumbnail}`,
            price: `${item[0]?.price}`,
            stock: `${item[0]?.stock}`
        })
    }, [item])

    const { title, description, code, thumbnail, price, stock } = itemForm

    const handleInputChange = (e) => {
        setItemForm({ ...itemForm, [e.target.name]: e.target.value });
    }

    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new URLSearchParams(new FormData(document.getElementById('productFormPut')))
        fetch(`${API_URL}/productos/${id}`, {
            method: 'PUT',
            body: data
        }).then(response => response.text())
            .then(data => window.location.reload())
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <div className='productFormPut'>
            <form id='productFormPut' onSubmit={handleSubmit}>
                <input type="text" name='title' onChange={handleInputChange} value={title} required />
                <input type="text" name='description' onChange={handleInputChange} value={description} required />
                <input type="text" name='code' onChange={handleInputChange} value={code} required />
                <input type="text" name='thumbnail' onChange={handleInputChange} value={thumbnail} required />
                <input type="number" name='price' onChange={handleInputChange} value={price} required />
                <input type="number" name='stock' onChange={handleInputChange} value={stock} required />
                <input type="submit" value='Modificar producto' className='btn' />
            </form>
        </div>
    )
}

export default FormPutProduct