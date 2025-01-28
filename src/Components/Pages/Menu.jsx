import { useState, useEffect } from "react"
import Qr from "../../assets/images/qr.png"
import { FaStar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useContext } from "react";

import { CartContext} from "../../Context/CartProvider";




function Menu() {

  const [recipes, setRecipes] = useState([]);
  const [filterProduct, setfilterProduct] = useState([]);
  const data= useContext(CartContext)
  console.log(data)
  const getData = async () => {
    let response = await fetch('https://dummyjson.com/recipes');
    response = await response.json();
    console.log(response.recipes);
    setRecipes(response.recipes);
  };
  // eslint-disable-next-line no-unused-vars
  const filterItems = (country) => {
    const newItems = recipes.filter((item) => {
      return item.cuisine == country;
    });

    setfilterProduct(newItems);
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <div className="flex  flex-col items-center text-center font-bold ">
        <h1 className="text-3xl mb-5 text-green-800 font-lg italic ">Our Menu</h1>
        <p><span className="text-orange-600">Our menu is more than just momos,</span><br />
          with a variety of dishes to cater to all tastes and preferences.</p>
      </div>

      <div className="flex flex-col items-center mt-12 ml-20 mr-20 h-96 bg-slate-100">
        <h1 className="text-2xl text-green-900 font-bold">Scan the QR code</h1>

        <p className="text-slate-600">You can also check the allergy advices using your phone as well</p>
        <img src={Qr} alt="" className="w-40 mt-10" />
      </div>

{/* Product list */}

      <div className="">
      <div className="  flex flex-wrap p-5 gap-20 justify-center items-center  ">
              {filterProduct.map((items) => {
                return (
                  <div
                    key={items.id}
                    className=" h-44 w-52 justify-center items-center shadow-2xl shadow-slate-500 rounded-3xl   "
                  >
                    
                    <NavLink to={`/productDescription/${items.id}`}>
                    <img
                      src={items.image}
                      alt="menu"
                      className="w-64 p-5 rounded-3xl"
                    />
                    <p> Name:{items.name}</p>
                    <p className="text-orange-600">
                      Price:Rs {items.caloriesPerServing}
                    </p>
                    </NavLink>
                  </div>
                );
              })}
            </div>

        <div className="flex flex-wrap justify-center gap-20 p-5">
          
          {recipes.map((item) => {
            return (
              <div className=" w-64 flex flex-col text-center items-center shadow-2xl " key={item.id}>

                <NavLink to={`/productDescription/${item.id}`}>
                <img src={item.image} alt="Menu_thumbnail" />
                <h1 className="text-black text-1xl font-bold">Name:{item.name}</h1>
                <h1 className="text-orange-600 mr-5">Price:Rs {item.caloriesPerServing}</h1>
                </NavLink>

                <div className="flex gap-3">
                  <h1 className="block">Rating: {item.rating}    </h1>
                  <FaStar className="mt-1 text-yellow-400"/>
                </div>
                <h1>Meal_Type:{item.mealType}</h1>
              </div>
            )
          })}
        </div>

      </div>
      
      <div className="border border-blue-300 shadow rounded-md  max-w-sm w-full mx-auto">
  <div className="animate-pulse flex space-x-4">
    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-700 rounded"></div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-700 rounded col-span-2"></div>
          <div className="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
</div>



    </>
  )
}

export default Menu
