import { BarChart, SearchRounded, ShoppingCart } from '@mui/icons-material'
import React, { useEffect } from 'react'
import Logo from '../assets/logo.png'
import Avatar from '../assets/Avatar.jpg'
const Header = () => {
    useEffect(()=>{
        const toggleMenu = document.querySelector('.toggleMenu');
        toggleMenu.addEventListener('click',()=>{
            document.querySelector('.rightMenu').classList.add('active')
        })
    },[])
  return (
    <header>
        <img 
        src={Logo} 
        alt="logo"
        className='logo'/>
        <div className="inputBox">
            <SearchRounded className="searchIcon"/>     
            <input type="text"  placeholder='Search'/>
        </div>
        <div className="shoppingCart">
            <ShoppingCart className='cart'/>
            <div className="cart_content">
                <p>2</p>
            </div>
        </div>
        <div className="profileContainer">
            <div className="imgBox">
                <img src={Avatar} alt="" />
            </div>
            <h2 className='userName'>Jhonatan P.</h2>
        </div>
        <div className="toggleMenu">
            <BarChart className='toggleIcon'/>
        </div>
    </header>
  )
}

export default Header