import Home from './pages/Home';
import Nav from './pages/Nav';
import './app.css'
import Carts from './components/Carts';
function App() {
  return (
    <div className='app'>
       <Nav/>
       <Carts/>
        <Home/>
    </div>
  );
}

export default App;
