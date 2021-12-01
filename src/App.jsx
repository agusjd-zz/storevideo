import "./App.scss";
import { NavBar } from "./Components/Navbar/Navbar";
import { ItemListContainer} from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
  <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path ="/" element={<ItemListContainer />} />
        <Route path="/detail" element = {<ItemDetailContainer/>}/>

      </Routes>
      
      
      

  </BrowserRouter>
  );
}

export default App;
