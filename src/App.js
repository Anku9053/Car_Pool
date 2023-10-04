import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import HomeCity from './pages/HomeCity';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './components/MainRoutes';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    {/* <Home/> */}
    <HomeCity/>
    {/* <MainRoutes/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
