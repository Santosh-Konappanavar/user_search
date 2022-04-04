import React, { useState } from 'react';

import '../styles/shop.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




function Shop() {
  
  const {  data } = useSelector((store) => store.shop.vehicle);

  const [,setNewData]=useState();
  const [filterName, setFilterName] = useState('')
  // setNewData(data);
  // console.log("new",newData);



    
const handleRadius=()=>{
setNewData(()=>{
  return [...data.sort((a,b)=>{
    return +a.radius[1] - +b.radius[1]
  })]
})
}

const handlePrice=()=>{
  setNewData(()=>{
    return [...data.sort((a,b)=>{
      return +a.price - +b.price
    })]
  })
  }


const handleDiscount=()=>{
  setNewData(()=>{
    return [...data.sort((a,b)=>{
      return +b.radius[0] - +a.radius[0]
    })]
  })
  }


const onlinePayment=()=>{
  setNewData(()=>{
    return [...data.sort((a,b)=>{
      return +a.id%2 - +b.id%2
      
    })]
  })
  }

  const handleAll=()=>{
    setNewData(()=>{
      return [...data.sort((a,b)=>{
       return +a.id - +b.id
      })]
    })
    }

    

// console.log(data,'dat')

  return (
    <div>
      <h4>Select your location</h4>
      <select  value={filterName} onChange={(e) => setFilterName(e.target.value)}>
      <option value={''}>All</option>
        {data.map((item)=> <option key={item.id} value={item.streetName}>{item.streetName}</option> )}
      </select>
<h1>SHOP PAGE</h1>

<div className='sort'>
  <h3>Sort By :</h3>
  <button onClick={()=>handleAll()}>All shops</button>
  <button onClick={()=>handleRadius()}>Radius</button>
  <button onClick={()=>onlinePayment()}>Online Payment</button>
  <button onClick={()=>handlePrice()}>Price</button>
  <button onClick={()=>handleDiscount()}>Discounts</button>
</div>


<div id='main'>
{

    data.filter((item) => item.streetName.includes(filterName)).map(e=>(
      <div className="card" key={e.id}>
  <h4 className='shopname'>{e.shopName.toUpperCase()}</h4> 
  <p><span className='type'>Street :</span> {e.streetName}</p>
  <p><span className='type'>Address :</span> {e.streetAddress}</p>
  <p><span className='type'>Radius :</span> {Math.abs(e.radius[1])} </p>
  <p><span className='type'>Vehicle :</span> {e.vehicle}</p>
  <p><span className='type'>Discounts :</span> {Math.abs(e.radius[0])} %</p>
  <p><span className='type'>Online Payment : </span>{e.id%2===0 ? "Available" : "Unavailable"}</p>
  {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
  <div className="card-body">
    <h5 className="card-title"><span className='type'>Price Charge : ₹</span>{e.price}</h5>
    <Link to={`/vehicle/${e.id}`} className="btn btn-primary">Proceed</Link>
  </div>
</div>
    ))
  }

</div>


    </div>
  )
}

export default Shop