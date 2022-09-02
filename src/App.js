
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
function App() {
  return (
    <><NavBar />
    <div className="App">
      <ItemListContainer greeting="Productos Destacados" />
      <ItemCount />
      <ItemListContainer />
      <ItemDetailContainer greeting="Item Detail Container"/>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
        </Routes>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
            <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
          </Routes>
          </CartProvider>
      </BrowserRouter>
      
    </div></>
  );
}

export default App;
