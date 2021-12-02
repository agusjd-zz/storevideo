import "./App.scss";
import { NavBar } from "./Components/Navbar/Navbar";
import { ItemListContainer} from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import CartView from "./Components/CartView/CartView";
import { CartProvider } from "./Context/CartContext";




function App() {


  return (

    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path ="/" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element = {<ItemDetailContainer/>}/>    
        <Route path="/category/:categoryId" element = {<ItemListContainer/>}/>
        <Route path="/cart" element={<CartView/>}  />
        <Route path="*" element={<Navigate to= "/"/>}/>
      </Routes>      

  </BrowserRouter>
  </CartProvider>


  );
}

export default App;
