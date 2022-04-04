import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "../styles/shop.css";
import { addCartData } from '../store/cartReducer/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { historyCartData } from '../store/orderHistory/actions';

function Cart() {
    const promoCodes = [
        {
            code : "GET50",
            benefits : 'You got 50% Discount'
        },
        {
            code : "GET25",
            benefits : 'You got 25% Discount'
        }
    ]
    const [promoCode, setPromoCode ] = useState('');
    const [promoCodeMsg, setPromoCodeMsg ] = useState('');
    const { cart } = useSelector((store) => ({ ...store }));
//   console.log("cart====",cart);
const dispatch=useDispatch()
const navigate=useNavigate()

const handleRemove = (id) => {
    let filArr = cart.filter(item => item.id !== id)
    localStorage.setItem("vehicleData", JSON.stringify(filArr))
    dispatch(addCartData(filArr))
    // console.log(filArr);
  }



  const buyCheck=()=>{

if (typeof window != undefined) {
    if (localStorage.getItem("vehicleData")) {
      let myOrderData = JSON.parse(localStorage.getItem("vehicleData"))
      let oldOrderData = JSON.parse(localStorage.getItem("orderData")) || []
      localStorage.setItem("orderData",JSON.stringify([...myOrderData, ...oldOrderData ]))
      dispatch(historyCartData([...myOrderData, ...oldOrderData]))
      localStorage.setItem("vehicleData", JSON.stringify([]))
    }
  }
  dispatch(addCartData([]))
//   toast.success("Payment Successful")
alert("Payment Successfull")

  setTimeout(() => {
    navigate("/")
  }, 3000)

  }

  const promoCheck = () => {


      var selectedPromo = promoCodes.filter((promo) => promo.code === promoCode);
      if(selectedPromo?.length) {
        setPromoCodeMsg(selectedPromo[0].benefits)
      } else {
        setPromoCodeMsg("Coupon is not valid !! Try Again")
      }
    //   console.log(selectedPromo,'edPromo')
  }


  let total=cart.reduce((curr,el)=>{
    if(promoCode==='GET50'){

      // setPromoCodeMsg('coupan applied')
    return curr+=Number(el.price/2)
  
    }else if(promoCode==='GET25'){
      return curr+=Number(el.price-el.price/4)
    }
    else{
      return curr+= Number(el.price)
    }
},0)

  return (
    <div>
        <h1>My Cart</h1>
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
            <td>Remove</td>
        </tr>
          {cart.map((e) => (
            <tr key={e.id} className='cartlist'>
              <td>{e.shopName}</td>
              <td className="price" >₹{e.price}</td>
              <td className="price" >{Math.abs(e.radius[0])}%</td>
              <td className="price" >{e.streetName}</td>
              <td className="price" >{e.streetAddress}</td>
              <td className="price" >{e.vehicle}</td>
              <td style={{ cursor: "pointer" }} onClick={() => handleRemove(e.id)} className="remove">X</td>
            </tr>
          ))}


        </tbody>
      </table>
      <h2 className='lead fw-bold' >Total Amount : <span id="pricep">₹ {total}</span></h2>

    promo code :
    <p>Try Coupans : GET50 , GET25</p>

    <input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
            {promoCodeMsg && <p>{promoCodeMsg}</p>}

            <button className='btn btn-primary float-end' id="buybtn" onClick={ promoCheck} disabled={cart.length === 0}>
        {"Get Benefits"} </button>

      <button className='btn btn-primary float-end' id="buybtn" onClick={buyCheck} disabled={cart.length === 0}>
        {"Buy Now"} </button>
    </div>
  )
}

export default Cart