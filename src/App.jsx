import './App.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer /> }/>
        <Route path='/:id' element={ <ItemDetailContainer /> }/>
        <Route path='/cart' element={ <Cart /> }/>
      </Routes>
    </div>
  );
}

export default App;
