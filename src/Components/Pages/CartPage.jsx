import { useContext } from "react";
import { CartContext } from "../../Context/CartProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
import { NavLink } from 'react-router-dom';


function CartPage() {
  const { state,dispatch } = useContext(CartContext);
  const CartItem = state.CartItem;
  const totalItems = state.CartItems.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  
  const totalitems=state.CartItem.reduce((acc,item)=>{
    return acc+item.qty*item.caloriesPerServing;
  },0);

  return (
    <div className="flex  justify-center mt-10   ">
      <div className=" w-[60%] ">
        {CartItem.length > 0 ? (
          <div>
            <div className="  p-2">
              {CartItem.map((item) => {
                return (
                  <div className="  shadow-md my-5 rounded-md p-3 shadow-stone-300  flex justify-between" key={item.id}>
                    <div className=" flex ">
                      <img className="h-16" src={item.image} alt="" />
                      <h1 className="ml-7 w-96">{item.name}</h1>
                    </div>

                    <div>
                      <p className="text-orange-500">{item.caloriesPerServing}</p>
                      <div className="flex space-x-1">
                      <span className="text-xl text-slate-500"><CiHeart /></span>
                      
                      <button
                    onClick={()=>{
                      dispatch({type:"Delete",payload:{id:item.id}})
                    }}
                    ><RiDeleteBin6Line /></button>
                      </div>
                      
                    </div>

                    <div className=" w-24  space-x-2 mt-3 ">
                    <button 
                      onClick={()=>{
                        dispatch({type:"Decrement",payload:{id:item.id}})
                      }}
                      className="bg-slate-500 rounded w-7">-</button>

                      <span>{item.qty}</span>

                        <button
                      onClick={()=>{
                        dispatch({type:"Increment",payload:{id:item.id}});
                      }}
                       className="bg-slate-500 rounded w-7">+</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className=" flex justify-center flex-col items-center w-96 m-auto mt-9 ">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--wishlist-bucket-shopping-state-pack-design-development-illustrations-1800917.png?f=webp" alt="" />
            <h1 className="text-lg   ">Cart is Empty <NavLink className="text-red-500 underline"  to='/menu'>Show Now</NavLink></h1>
            </div>
        )}
      </div>

     {CartItem.length > 0 &&(
      <div className="max-w-sm p-3 border rounded-lg shadow-md bg-white">
        
      
      <div className="mb-4 w-96">
        <h2 className="text-sm font-semibold  text-slate-500">Location</h2>
        <button className="text-black-500 text-sm flex gap-3 mt-3"> <span className="mt-1 text-slate-500"><TfiLocationPin /></span>Add Shipping Address</button>
      </div>

      <hr className="mb-4" />

      
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Order Summary</h2>

        
      </div>

      
      <div className="mb-4 flex space-x-3" >
        <input
          type="text"
          placeholder="Enter Voucher Code"
          className="w-full border rounded-sm p-2 text-sm focus:ring-2 focus:ring-slate-200 focus:outline-none"
        />
        <button className="w-40 bg-blue-500 text-white rounded-sm text-lg hover:bg-blue-700">APPLY</button>
      </div>

      <hr className="mb-4" />

  
      <div className="flex justify-between items-center text-lg font-bold text-gray-800 mb-4">
      <p className="text-2xl font-medium mt-4">Total</p>
          <button className="font-medium text-orange-600 mt-2 "
            onClick={() => {
              dispatch({ type: "ClearCart" });
            }}
          >
              Rs.({totalitems})
          </button> 
      </div>

  
      <NavLink to='/payment' state={[...CartItem]}
      
        className="w-full bg-green-600 text-white py-3 rounded-lg text-sm font-semibold hover:bg-green-900 disabled:opacity-50"
        disabled
      >
        PROCEED TO CHECKOUT ({totalitems})
      </NavLink>

      <button 
      onClick={()=>{
        dispatch({type:"ClearCart"})
      }}
       className="bg-red-600 text-white rounded p-2 w-52 mt-4 " > Clear Cart</button>
    </div>


     )}
       

      
    </div>
  );
}

export default CartPage;