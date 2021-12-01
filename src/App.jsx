import "./App.scss";
import { NavBar } from "./Components/Navbar/Navbar";
import { ItemListContainer} from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CartView from "./Components/CartView/CartView";


function App() {
  return (
  <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path ="/" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element = {<ItemDetailContainer/>}/>    
        <Route path="/category/:categoryId" element = {<ItemListContainer/>}/>
        <Route path="/cart" element={<CartView/>}  />
      </Routes>
      
      
      

  </BrowserRouter>
  );
}

export default App;
