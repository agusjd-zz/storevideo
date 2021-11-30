import "./App.scss";
import { NavBar } from "./Components/Navbar/Navbar";
import { ItemListContainer} from "./Components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
