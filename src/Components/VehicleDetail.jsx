import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartData } from "../store/cartReducer/actions";
import _ from "lodash";
// import toast from 'react-toastify'



const VehicleDetail=()=>{
    const {  data } = useSelector((store) => store.shop.vehicle);
    const { cart } = useSelector((store) => ({ ...store }));
        const {vehicleid}=useParams()
    const viewSingleData = data.filter((item) => Number(item.id) == Number(vehicleid));
    // console.log(viewSingleData);

    const dispatch=useDispatch()


    //cart data
    const cartClick = () => {
        if (typeof window != undefined) {
          let uniqueData = data.filter((el) => Number(el.id) === Number(vehicleid))
        //   console.log("uniquedata", uniqueData);
        //   console.log("cart", cart);
          if (cart.length === 0) {
            localStorage.setItem("vehicleData", JSON.stringify(uniqueData))
            dispatch(addCartData(uniqueData))
          } else {
            let arr1 = [...cart, ...uniqueData];
            let unique = _.uniqWith(arr1, _.isEqual)
            localStorage.setItem("vehicleData", JSON.stringify(unique))
            dispatch(addCartData(unique))
          }
          // console.log("unique",uniqueData);
          // dispatch(addCartData(unique))
        }
        alert("Item Added to cart")
        // toast.success("Item Added to Cart")
      }


    return (
        <div>
            <h2>SHOP DETAIL</h2>
            <div id='main'>
{
    viewSingleData.map(e=>(
      <div className="card" style={{width:"600px",fontSize:"20px",backgroundColor:"wheat"}} key={e.id}>

  <h4 className='shopname'>{e.shopName.toUpperCase()}</h4> 
  <p><span className='type'>Street :</span> {e.streetName}</p>
  <p><span className='type'>Address :</span> {e.streetAddress}</p>
  <p><span className='type'>Radius :</span> {Math.abs(e.radius[1])} </p>
  <p><span className='type'>Vehicle :</span> {e.vehicle}</p>
  <p><span className='type'>Model :</span> {e.model}</p>
  <p><span className='type'>Payments :</span> {e.payments}</p>
  <p><span className='type'>Direction :</span> {e.radiuss}</p>
  <p><span className='type'>Type :</span> {e.type}</p>
  <p><span className='type'>Discounts :</span> {Math.abs(e.radius[0])} %</p>
  <p><span className='type'>Online Payment : </span>{e.id%2==0 ? "Available" : "Unavailable"}</p>
  {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
    <p className="card-title"><span className='type'>Price Charge : </span>₹{e.price}</p>
  <div className="card-body">
    <Link to={`/vehicle/${e.id}`} className="btn btn-primary" onClick={cartClick}>Add to Cart</Link>
  </div>
</div>
    ))
  }

</div>
        </div>
    )
  
}

export default VehicleDetail;