import "./App.scss";
import { NavBar } from "./Components/Navbar/Navbar";
import { ItemListContainer} from "./Components/ItemListContainer/ItemListContainer"
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting = "Bienvenido" />
    </div>
  );
}

export default App;
