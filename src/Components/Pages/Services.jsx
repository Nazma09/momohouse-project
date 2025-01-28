
import star from '../../assets/images/star.png'
import Video from '../../assets/images/Video.png'
import prio from "../../assets/images/prio.png";
import QR1 from "../../assets/images/QR1.png";
import ing from "../../assets/images/ing.png";
import Chef from "../../assets/images/Chef.png";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Services = () => {
  return (
    <div>
       <div className=" h-[120%] w-[100%]  flex justify-center gap-60 text-center items-center">
               <div className="text-left">
                 <h1 className="text-3xl mb-4 font-lg italic text-green-900">
                   About Us
                 </h1>
                 <h1 className="text-slate-500">WE PRIDE OURSELF ON</h1>
                 <h1 className="text-3xl">
                   <span className="text-orange-600">Our authentic momo recipes </span>{" "}
                   <br />
                   passed down through <br />
                   generations
                 </h1>
               </div>
       
               <div className=" h-[110%] ">
                 <img src={star} alt="chef_girl_image" className="w-96 mt-5" />
               </div>
             </div>
       <div className='  mt-10'>
        <img src={Video}/>
       </div>
       <div>
       <div className='flex items-center pl-10 ml-20 mr-20 mt-10 gap-40'>
          <div className=' '>
            <img src={prio}/>
         <p className="text-3xl text-black-800 font-bold">Private Party </p><br/>
         <p className=' text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing<br/> elit. Est, dolore pariatur quis<br/> voluptatum ab laboriosam nostrum quod<br/> officia obcaecati quae explicabo velit id.</p><br/>
         <h1 className='  text-2xl font-bold'><span className='text-green-600'>Scan the QR Code. </span><br/>
         <p className=' font-thin text-gray-500'>You can also check about <br /> the service. </p> 
         <img src={QR1} className='pl-80 mt-3 relative bottom-20'/>
         </h1>
         
       </div>

       <div className='justify-center items-center'>
       <div className='flex items-center'>
          <div className="h-[10%] w-[60%] flex items-center justify-end">
                 <img src={ing}/>
                   </div>
         </div>
       </div>
       </div>

       <div className='flex items-center pl-10  ml-20 mr-20 mt-10 gap-40'>
       <div className="h-[10%] w-[35%]  flex items-center justify-end">
       <img src={ing}/>
       </div>
       <div className=''>
            <img src={Chef}/>
         <p className="text-3xl text-black-800 font-bold">Catering</p><br/>
         <p className=' text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing<br/> elit. Est, dolore pariatur quis<br/> voluptatum ab laboriosam nostrum quod<br/> officia obcaecati quae explicabo velit id.</p><br/>
         <h1 className='  text-2xl font-bold'><span className='text-green-600'>Scan the QR Code. </span><br/>
         <p className=' font-thin text-gray-500'>You can also check about <br /> the service. </p> 
         <img src={QR1} className='pl-80 relative bottom-20 h-20'/>
         </h1>
       </div>

       </div>
       </div>
       <div className='flex  flex-col items-center justify-center mt-20 ml-20 mr-20 h-64 rounded-3xl bg-slate-300'>
        <h1 className='pb-16 text-2xl font-semibold'>Got any Quiries ?</h1>
        <p className=''>If you have any quiries send us a message. Our friendly Team would love to hear from you.</p><br/>
        <NavLink to="/about">
              <Button title="Get In Touch " />
            </NavLink>
       </div>
     
       
       </div>
       
       
       
  )
}

export default Services