import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SigUp from './components/SigUp';
import Header from './components/Header';
import Notfound from './components/Notfound';
import AddDataset from './components/AddDataset';
import {Toaster} from 'react-hot-toast';
import Login from './components/Login';

function App() {
    return (
      <div>
        <Toaster position = "top-center"/>
        {}
        <BrowserRouter>
        <Header />
          <Routes>
              <Route element={<Home></Home>} path="/" /> 
              <Route element={<Home></Home>} path="home" /> 
              <Route element={<Login></Login>} path="Sign" />
              <Route element={<SigUp></SigUp>} path="SigUp" />
              <Route element={<AddDataset></AddDataset>} path="AddDataset" />
              <Route element={<Notfound />} path="*" />
          </Routes>
         </BrowserRouter>
  
      </div>
    );
  }
  
  export default App;