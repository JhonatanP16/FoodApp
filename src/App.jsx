import Header from "./components/Header"
import './App.css'
import Delivery from './assets/delivery.png'
import MenuContainer from "./components/MenuContainer"
import { AccountBalance, AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from "@mui/icons-material"
import { useEffect, useState } from "react"
import BannerName from "./components/BannerName"
import SubmenuContainer from "./components/SubmenuContainer"
import MenuCard from "./components/MenuCard"
import { MenuItems,Items } from "./components/Data"
import ItemCard from "./components/ItemCard"
import DebitCard from "./components/DebitCard"
import CartItems from "./components/CartItems"
function App() {
  const [isMainData, setIsMainData] = useState(
    Items.filter(element => element.itemId ==="buger01")
  )
  useEffect(()=>{
    const menuLi = document.querySelectorAll('#menu li');
    function setMenuActive(){
      menuLi.forEach(n=>n.classList.remove('active'));
      this.classList.add('active');
    }
    menuLi.forEach(n => n.addEventListener('click',setMenuActive))
    /*Menu active toggle */
    const menuCards = document
    .querySelector('.rowContainer')
    .querySelectorAll('.rowMenuCard');

    function setMenuCardActive(){
      menuCards.forEach(n=>n.classList.remove('active'));
      this.classList.add('active');
    }
    menuCards.forEach(n => n.addEventListener('click',setMenuCardActive))
  },[isMainData])
  //setmaindata
  const setData = (itemId) => {
    setIsMainData( Items.filter(element => element.itemId === itemId))
  }
  return (
    <div className="App">
      {/* Header Section */}
      <Header/>
      {/* Main Container */}
      <main>
        <div className="mainContainer">
          {/* Banner */}
          <div className="banner">
            <BannerName name={"Vetri"} discount={"20"} link={"#"}/>
            <img 
            src={Delivery} 
            alt=""
            className="deliveryPic"/>
          </div>
          {/* dishContainer */}
          <div className="dishContainer">
            <div className="menuCard">
              <SubmenuContainer name={"Menu Category"}/>
            </div>
            <div className="rowContainer">
             
                {
                  MenuItems && MenuItems.map(data =>{
                    return(
                      <div key={data.id} onClick={()=>setData(data.itemId)}>
                      <MenuCard 
                      imgSrc={data.imgSrc} 
                      name={data.name}
                      isActive = {data.id === 1 ? true : false}
                      />
                      </div>
                    )
                  })
                }
               
            </div>
            <div className="dishitemContainer">
              {isMainData && isMainData.map(data=>{
                return(
                  <ItemCard
                  key={data.id}
                  itemId={data.id}
                  imgSrc={data.imgSrc} 
                  name={data.name} 
                  price={data.price}
                  ratings={data.ratings}
                  />
                )
              })}
              
            </div>
          </div>
        </div>
        <div className="rightMenu">
          <div className="debitCardContainer">
              <div className="debitCard">
                <DebitCard/>
              </div>
          </div>
          <div className="cartCheckOutContainer">
            <SubmenuContainer name={"Cart Items"}/>
            <div className="cartContainer">
              <div className="cartItems">
                <CartItems
                name={"Burguer"}
                imgSrc={"https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fburger3.png?alt=media&token=0ebe8311-6378-411b-9b6e-d7a6d2a106a2"}
                qty={"4"}
                price={"7.95"}
                />
              </div>
            </div>
            <div className="totalSection">
              <h3>Total</h3>
              <p><span>$</span>45.5</p>
            </div>
            <button className="checkOut">Check Out</button>
          </div>
        </div>
      </main>
      {/* Botoom Menu */}
      <div className="bottomMenu">
        <ul id="menu">
            {/* prettier ignore */}
            <MenuContainer link={'#'} icon ={<HomeRounded/>} isHome/>
            {/* prettier ignore */}
            <MenuContainer link={'#'} icon ={<Chat/>}/>
            {/* prettier ignore */}
            <MenuContainer link={'#'} icon ={<AccountBalanceWalletRounded/>}/>
            {/* prettier ignore */}
            <MenuContainer link={'#'} icon ={<Favorite/>}/>
            {/* prettier ignore */}
            <MenuContainer link={'#'} icon ={<SummarizeRounded/>}/>
            {/* prettier ignore */}
            <MenuContainer link={'#'} icon ={<Settings/>}/>
            <div className="indicator"></div>
        </ul>
      </div>
    </div>
  )
}

export default App
