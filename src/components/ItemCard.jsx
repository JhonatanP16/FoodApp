import { AddRounded, Favorite, StarRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { actionType } from '../Context/reducer';
import { useStateValue } from '../Context/StateProvider';
import { Items } from './Data';
let cartData =[];
const ItemCard = ({imgSrc, price,name,ratings, itemId}) => {
    const [isFavorite,setIsFavorite] = useState(false);
    const [currentValue,setCurrentValue] = useState(Math.floor(ratings));

    const [isCart,setIsCart] = useState(null);
    const [{},dispatch] = useStateValue();
    useEffect(()=>{
      if(isCart){
        cartData.push(isCart);
        dispatch({
          type: actionType.SET_CART,
          cart: cartData
        })
      }
    },[isCart])
    const handleClick = (value) => {
      setCurrentValue(value);
    }
  return (
    <div className="itemCard" id={itemId}>
        <div 
        className={`isfavorite ${isFavorite ? 'active' : ''}`}
        onClick={()=>setIsFavorite(!isFavorite)}
        >
            <Favorite/>
        </div>
        <div className="imgBox">
            <img src={imgSrc} alt={name} className="itemImg"/>
        </div>
        <div className="itemContent">
          <h3 className='itemName'>{name}</h3>
          <div className="bottom">
            <div className="ratings">
                {Array.apply(null,{length : 5}).map((e,i)=>(
                    <i key={i} className={`ratings ${currentValue > i ? "orange" : "gray"}`}
                    onClick={()=>handleClick(i + 1)}
                    >
                        <StarRounded/>
                    </i>
                ))}
                <h3 className="price"><span>$</span>{price}</h3>
            </div>
            <i 
            className='addtoCart'
            onClick={()=>setIsCart(Items.find(n=>n.id === itemId))}>
                <AddRounded/>
            </i>
          </div>
        </div>
    </div>
  )
}

export default ItemCard