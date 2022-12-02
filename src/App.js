import './App.css';
import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import {CartWidget} from "./components/CartWidget"


function App() {
  return (
    <div>
      <Navbar/>
      <CartWidget/>
      <ItemListContainer texto="Pablo"/>
      <header className="App-header bg-secondary">
      </header>
    </div>
  );
}

export default App;
