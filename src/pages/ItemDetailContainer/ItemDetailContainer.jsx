import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { API_URL } from '../../services'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { id } = useParams();

    useEffect(() => {
        fetch(`${API_URL}/productos/${id}`)
            .then(response => response.json())
            .then(producto => {
                setItem(producto)
            })
    }, [id])

    return (
        <div className='item-container'>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer