import "./App.scss";
import { NavBar } from "./Components/Navbar/Navbar";
import { ItemListContainer} from "./Components/ItemListContainer/ItemListContainer"
import { ItemCount } from "./Components/ItemCount/ItemCount";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = "Bienvenido" />
      <ItemCount stock= {10}  />
    </div>
  );
}

export default App;
