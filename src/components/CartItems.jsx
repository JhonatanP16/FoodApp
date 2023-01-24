import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { actionType } from '../Context/reducer';
import { useStateValue } from '../Context/StateProvider';
let cartItems = [];
const CartItems = ({imgSrc,name,price,id}) => {
  const [{cart},dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(1);
  const [itemPrice,setItemPrice] = useState(parseInt(quantity) * parseFloat(price));
  useEffect(()=>{
    cartItems = cart;
    setItemPrice(parseInt(quantity) * parseFloat(price));
  },[quantity])
  const updateQuantity = (action,id) =>{
    if(action==="add"){
      setQuantity(quantity + 1)
    }else{
      if(quantity == 1){
        const item = cartItems.findIndex((obj) => obj.id === id)
        cartItems.splice(item,1);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems
        })
      }
      setQuantity(quantity - 1 )
    }
    
  }
  return (
    <div className="cardItem">
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {quantity}</span>
          <div className="quantity">
            <RemoveRounded className='itemRemove' onClick={()=>updateQuantity('remove',id)}/>
            <AddRounded className='itemAdd' onClick={()=>updateQuantity('add',id)}/>
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className='dolorSign'>$</span>
        <span className='itemPriceValue'>{itemPrice}</span>
      </p>
    </div>
  )
}

export default CartItems