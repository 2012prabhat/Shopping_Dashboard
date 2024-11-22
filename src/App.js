import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "bootstrap-4-react"
import Dashboard from './pages/Dashboard';
import Header from './components/header';
import Sidebar from './components/Sidebar';
import Product from './pages/Product'
import { useState } from 'react';
import ProductComp from './pages/Dashboard/components/ProductComp';
import AddProduct from './pages/Product/AddProduct';
import { useEffect } from 'react';

function App() {
  const [sidebarDis,setSidebarDis] = useState(true);
  useEffect(()=>{
      if(window.innerWidth<800){
        setSidebarDis(false)
      }
  },[])
  return (
    <BrowserRouter>
    <Header state={[sidebarDis,setSidebarDis]}/>
    <div className="main d-flex">
      <div className="sidebarWrapper" style={sidebarDis?{width:'20%',flex:'0 0 20%'}:{}}>
        <Sidebar state={[sidebarDis,setSidebarDis]} />
      </div>

      <div className="content" style={sidebarDis?{width:'80%',flex:'0 0 80%'}:{width:'100%',flex:'0 0 100%'}} onClick={()=>sidebarDis && setSidebarDis(false)}>
      <Routes>
        <Route path="/" exact={true} element={<Dashboard/>}/>
        <Route path="/dashboard" exact={true} element={<Dashboard/>}/>
        <Route path="/productview" exact={true} element={<Product/>}/>
        <Route path="/productlist" exact={true} element={
        <div style={{padding:'2%'}}>
        <ProductComp/>
        </div>
      }/>
      <Route path="/upload" exact={true} element={<AddProduct/>}/>
      </Routes>
      </div>
    </div>
      
    </BrowserRouter>
  );
}

export default App;
