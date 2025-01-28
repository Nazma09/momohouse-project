import { NavLink } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import Momologo from "../../assets/images/momologo.png"
import { useContext } from "react";
import { CartContext } from "../../Context/CartProvider";
import { useAuth0 } from "@auth0/auth0-react";
import { FaRegUserCircle } from "react-icons/fa";


function Navigation() {
  const { user, isAuthenticated, logout } = useAuth0();

  const {state}=useContext(CartContext)
  console.log(state.CartItem)
  const totalitems=state.CartItem.reduce((acc,item)=>{
    return acc+item.qty;
  },0);


  return (
    <div className=" border-2 flex justify-around items-center px-5 gap-x-3 h-16 ">

      <div className=" flex items-center gap-3 font-bold ">

        <img src={Momologo} alt="Momologo" className="h-7" />
        <NavLink to='/' className="text-green-500">momos</NavLink>

      </div>


      <div className=" flex items-center space-x-6 p- text-center text-slate-500 ">
        <NavLink to='/about'>About Us</NavLink>
        <NavLink to='/services'> Our Services</NavLink>
        <NavLink to='/menu'>Our Menu</NavLink>
        <NavLink to='/allergyadvice'>Allergy Advice</NavLink>
        {
            isAuthenticated?(
              <NavLink
              onClick={()=>{
                logout();
              }}>
                Logout
                </NavLink>

            ):(
              <div className="space-x-6">
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>SignUp</NavLink>
              </div>
            )
          }
        
       
        <NavLink to="/cartpage"className="relative text-2xl text-slate-800 flex ">
        <span className="text-orange-600 absolute bottom-4 left-8 text-lg">{totalitems}</span>
         <CiShoppingCart size={35}/>
        </NavLink>
        
         

        
         
      </div>

      <div className=" flex items-center gap-x-3">
      

        <NavLink to="https://www.facebook.com/" target="_blank" className="text-2xl text-slate-500">
          <FaFacebook />
        </NavLink>

        <NavLink to="https://www.tiktok.com/" target="_blank" className="text-2xl text-slate-500">
          <AiFillTikTok />
        </NavLink>


        <NavLink to="https://www.instagram.com/" target="_blank" className="text-2xl text-slate-500">
          <FaInstagramSquare />

        </NavLink>




        <NavLink to='/contact'
         className="bg-orange-400 rounded-3xl text-white px-4 py-2 hover:bg-orange-700">
        Contact Us</NavLink>
        
        {isAuthenticated ? (
          <NavLink to="/profile" className=" rounded-full ">
            <img className="rounded-full h-10 " src={user.picture} alt="" />
          </NavLink>
        ) : (
          <div>
            <FaRegUserCircle size={25} />
          </div>
        )}
      </div>


    </div>







  )
}

export default Navigation
