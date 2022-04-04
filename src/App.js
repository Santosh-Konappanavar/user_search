
import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getDataSuccess } from './store/shopReducer/actions';


import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import { Route, Routes } from 'react-router';
import VehicleDetail from './Components/VehicleDetail';
import Cart from './Components/Cart';
import MyOrders from './Components/MyOrders';



function App() {


  const dispatch=useDispatch()
  useEffect(()=>{
    
    const getDataVehicle=()=>{
   axios.get("https://neha-json-server.herokuapp.com/vehicle").then(({data})=>{
    //  console.log("data",data);
       dispatch(getDataSuccess(data))
       
   })
}
  
getDataVehicle()
},[dispatch])

  return (
    
    <div className="App">
      {/* <ToastContainer/> */}
    <Navbar/>
      <Routes>
        <Route path={'/'} element={<Shop/>}></Route>
        <Route path={'/vehicle/:vehicleid'} element={<VehicleDetail/>}></Route>
        <Route path={'/cart'} element={<Cart/>}></Route>
        <Route path={'/myorders'} element={<MyOrders/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
