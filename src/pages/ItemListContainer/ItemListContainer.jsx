import React, { useEffect, useState } from 'react'
import FormAddProduct from '../../components/FormAddProduct/FormAddProduct'
import ItemList from '../../components/ItemList/ItemList'
import { API_URL, admin } from '../../services'

const ItemListContainer = () => {
    const [products, setProdcuts] = useState([])

    useEffect(() => {
        fetch(`${API_URL}/productos`)
        .then(response => response.json())
        .then(productos => {
            setProdcuts(productos)
        })
    }, [])

    return (
        <div className='item-container'>
            { admin ? <FormAddProduct /> : <></>}
            <ItemList items={products} />
        </div>
    )
}

export default ItemListContainer