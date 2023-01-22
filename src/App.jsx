import Header from "./components/Header"
import './App.css'
import MenuContainer from "./components/MenuContainer"
import { AccountBalance, AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from "@mui/icons-material"
function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <Header/>
      {/* Main Container */}
      <main>
        <div className="mainContainer"></div>
        <div className="rightMenu"></div>
      </main>
      {/* Botoom Menu */}
      <div className="bottomMenu">
        <ul id="menu">
            {/* prettier ignore */}
            <MenuContainer link={'#'} icon ={<HomeRounded/>}/>
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
