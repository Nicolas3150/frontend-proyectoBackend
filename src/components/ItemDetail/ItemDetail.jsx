import React from 'react'
import { admin } from '../../services'
import FormPutProduct from '../FormPutProduct/FormPutProduct'
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    return (
        <div>
            {admin ? <FormPutProduct item={item} /> : <></>}
            <div className='item'>
                <div className='img-container'>
                    <h2> {item[0]?.title}</h2>
                    <img src={item[0]?.thumbnail} alt="" />
                </div>
                <div className='detail-container'>
                    <h1> {item[0]?.title} </h1>
                    <p className='price'>Precio: ${item[0]?.price}</p>
                    <hr />
                    <p className='detail'>{item[0]?.description}</p>
                    <div className='divSpan'>
                        <span>Stock: {item[0]?.stock}</span>
                        <span>Code: {item[0]?.code}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail