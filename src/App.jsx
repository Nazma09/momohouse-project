import Contact from "./Components/Pages/Contact"
import Login from "./Components/Auth/Login"
// eslint-disable-next-line no-unused-vars
import ProtectedRoute from "./Components/Auth/ProtectedRoute"
import SignUp from "./Components/Auth/SignUp"
import About from "./Components/Pages/About"
import CartPage from "./Components/Pages/CartPage"
import Services from "./Components/Pages/Services"
import Menu from "./Components/Pages/Menu"
import ProductDescription from "./Components/Pages/ProductDescription"
import AllergyAdvice from "./Components/Pages/AllergyAdvice"
import Home from "./Components/Pages/Home"
import Navigation from "./Components/NavBar/Navigation"
import Footer from "./Components/Footer/Footer"
import Payment from "./Components/Pages/Payment"

import { Route,Routes } from "react-router-dom"
import Success from "./Components/Pages/Success"
import Failure from "./Components/Pages/Failure"
import Profile from "./Components/Profile"


function App() {
  return (
    <>
    <div>
      <Navigation/>
     <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cartpage" element={<CartPage/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/productDescription/:id" element={<ProductDescription/>}/>
      <Route path="/allergyadvice" element={<AllergyAdvice/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/failure" element={<Failure/>}/>
      <Route path="/profile" element={<Profile/>}/>


     </Routes>



    </div>






    <div className="mt-10">
      {/* <hr /> */}

    <Footer/>
    </div>

    </>
  )
}

export default App
