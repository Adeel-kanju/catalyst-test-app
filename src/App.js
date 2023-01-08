import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Photos/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        
      </Routes>
    </Router>
    
  );
}

export default App;
