import React from 'react';
import { useSelector } from 'react-redux';
import "../styles/shop.css"

function MyOrders() {
    const history=useSelector(store=>store.history)
//   console.log("hhisro",history);
  return (
    <div>
        <h1>My Orders</h1>
        <table className="table">
        <thead>

        </thead>
        <tbody>



        <tr className='carthead'>
            <td>Shop Name</td>
            <td>Price</td>
            <td>Discounts</td>
            <td>Street Name</td>
            <td>Street Address</td>
            <td>Vehicle</td>
        </tr>
          {history.map((e) => (
            <tr key={e.id} className='cartlist'>
              <td>{e.shopName}</td>
              <td className="price" >₹{e.price}</td>
              <td className="price" >{Math.abs(e.radius[0])}%</td>
              <td className="price" >{e.streetName}</td>
              <td className="price" >{e.streetAddress}</td>
              <td className="price" >{e.vehicle}</td>
            </tr>
          ))}


        </tbody>
        </table>
    </div>
  )
}

export default MyOrders