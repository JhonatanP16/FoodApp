import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React from 'react'

const CartItems = ({imgSrc,name,price,qty}) => {
  return (
    <div className="cardItem">
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded className='itemRemove'/>
            <AddRounded className='itemAdd'/>
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className='dolorSign'>$</span>
        <span className='itemPriceValue'>{price}</span>
      </p>
    </div>
  )
}

export default CartItems