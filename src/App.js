
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
function App() {
  return (
    <><NavBar />
    <div className="App">
      <ItemListContainer greeting="Productos Destacados" />
      <ItemCount />
      <ItemListContainer />
      <ItemDetailContainer greeting="Item Detail Container"/>
    </div></>
  );
}

export default App;
