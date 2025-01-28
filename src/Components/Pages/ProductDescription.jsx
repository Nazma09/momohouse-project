import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartProvider";

function ProductDescription() {
  
  const {state,dispatch}= useContext(CartContext)
  console.log(state)
  const { id } = useParams();

  const totalitems=state.CartItem.reduce((acc,item)=>{
    return acc+item.qty;
  },0);
  

  const [singleProduct, setSingleProduct] = useState({});
  // console.log(id);
   

  const getSingleProduct = async () => {
    let productData = await fetch(`https://dummyjson.com/recipes/${id}`);
    productData = await productData.json();

    setSingleProduct(productData);
    console.log(productData);
  };

  useEffect(() => {
    getSingleProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
   
       
      {singleProduct ? (
        <>
          <div className="">
            <div className=" flex gap-7 pl-24 mt-4 ">
              <div>
                <img
                  className="h-[175px] w-[300px] mt-2"
                  src={singleProduct.image}
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="text-black-500 font-bold text-2xl">
                  Name:{singleProduct.name}
                </h1>

                <p className=" text-orange-500">
                  <span className="font-bold">Price</span>:
                  {singleProduct.caloriesPerServing}
                </p>
                <p className=" text-blue-700">
                  <span className="font-bold">Rating</span>:
                  {singleProduct.rating}
                </p>

                <div className="flex gap-1 pl-1 mt-3 mb-3   ">
                <button 
                      onClick={()=>{
                        dispatch({type:"Decrement",payload:{id:singleProduct.id}})
                      }}
                      className="bg-slate-500 rounded w-7">-</button>

                  <span>{totalitems}</span>

                  <button
                      onClick={()=>{
                        dispatch({type:"Increment",payload:{id:singleProduct.id}});
                      }}
                       className="bg-slate-500 rounded w-7">+</button>
                       
                </div>
                <div className="flex gap-3 pl-1 mt-3 mb-3   ">
                  <button
                    className="bg-blue-500 hover:bg-blue-800 p-4
                        gap-x-2 text-white font-bold w-36 text-center rounded-sm"
                  >
                    Buy Now
                  </button>
                  <button
                  onClick={() => {
                    dispatch({type:"AddToCart",payload:singleProduct});
                  }}
                    className="bg-orange-500 hover:bg-orange-600 p-4
                        gap-x-2 text-white font-bold w-36 text-center rounded-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className=" pl-24 mt-6">
              <h1 className="font-bold text-3xl">Product Description</h1>
              <p className="">
                PrepTimeMinutes: {singleProduct.prepTimeMinutes}
              </p>
              <p className="">Cuisine: {singleProduct.cuisine}</p>
              <p className="">Difficulty: {singleProduct.difficulty}</p>

              <div>

                <div>
  <h1 className="text-3xl font-bold mt-5">Ingredients:</h1>
  <ul className="list-disc pl-5 mt-4">
    {(singleProduct?.ingredients || []).map((ingredient, index) => (
      <li key={index} className="font-semibold">
        <span className="italic">{ingredient}</span>
      </li>
    ))}
  </ul>
</div>

              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default ProductDescription;
