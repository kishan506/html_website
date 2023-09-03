import logo from './logo.svg';
import './App.css';
// import DrawerAppBar from './component/Navbar';
import DrawerAppBar from "./component/NAvbar1"
import { Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Carts from './component/Carts';
import BuysPage from './component/BuyPage';
function App() {
  return (
    <>
  <Routes>
    {/* <Route path='/' element={<DrawerAppBar/>}/> */}
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/Carts' element={<Carts/>}/>
    <Route path='/BuysPage' element={<BuysPage/>}/>


  </Routes>
    
      </>
    );
}

export default App;
