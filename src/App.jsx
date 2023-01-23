import Header from "./components/Header"
import './App.css'
import Delivery from './assets/delivery.png'
import MenuContainer from "./components/MenuContainer"
import { AccountBalance, AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from "@mui/icons-material"
import { useEffect } from "react"
import BannerName from "./components/BannerName"
function App() {
  useEffect(()=>{
    const menuLi = document.querySelectorAll('#menu li');
    function setMenuActive(){
      menuLi.forEach(n=>n.classList.remove('active'));
      this.classList.add('active');
    }
    menuLi.forEach(n => n.addEventListener('click',setMenuActive))
  },[])
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
        </div>
        <div className="rightMenu">

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
