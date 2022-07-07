import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ items }) => {
    return (
        <div className='list-card'>
            {items.length !== 0 ? items.map(item => <Item item={item} key={item.id} />) : <h2>No hay resultados...</h2>}
        </div>
    )
}

export default ItemList