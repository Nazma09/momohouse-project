import Button from "../Button/Button";
import bgOne from "../../assets/images/bgOne.jpg";
import chefimg from "../../assets/images/chefimg.png";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import man from "../../assets/images/man.png";
import momo from "../../assets/images/momo.png";
import circle from "../../assets/images/circle.png";
import like from "../../assets/images/like.png";
import party from "../../assets/images/party.png";
import chefCap from "../../assets/images/chefCap.png";
import girl from "../../assets/images/girl.png";


function Home() {
  const [recipes, setRecipes] = useState([]);

  const [filterProduct, setfilterProduct] = useState([]);
  const getData = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setRecipes(response.recipes);
  };

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
      <div className="flex mt-5  h-96 ">
        <div className=" w-[50%]   ml-[20%] mt-20">
          <p className="text-1xl text-slate-500 "> RESTAURANT</p>
          <h1
            className="text-3xl flex
        items-center font-bold "
          >
            The{" "}
            <span
              style={{
                backgroundImage: `url(${bgOne})`,
              }}
              className=" h-16 w-36 bg-contain  text-center text-3xl
         bg-no-repeat   flex  items-center justify-center  text-white ml-2 "
            >
              #One
            </span>{" "}
          </h1>
          <h1 className="text-3xl">
            Momo <span className="text-orange-600">Restaurant</span>
          </h1>
          <p>
            More than <span className="text-orange-600">20+ Varieties </span>of
            momo available for you
          </p>
          <br />
          <NavLink to="/menu">
            <Button title="Explore Food Menu" />
          </NavLink>
        </div>

        <div className="   flex items-center p-50 overflow-hidden h-[110%] ">
          <img
            src={circle}
            alt="circle_img"
            className="w-[31%] ml-[70%] mb-14"
          />
        </div>

        <img
          src={momo}
          alt="momo"
          className=" absolute w-80 left-[75%] mt-12 "
        />
      </div>

      <div className=" flex items-center gap-20 ">
        <div className=" w-[30%] p-5 ml-[20%] ">
          <img
            src={man}
            alt="man"
            className="w-auto h-96"
          />
        </div>

        <div className="w-[30%]">
          <h1 className="text-2xl font-bold">
            Why Customers <span className="text-orange-500"> Love Us</span>
          </h1>{" "}
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nibh
            fermentum vulputate tortor. Egestas facilisi luctus turpis arcu
            dignissim. Amet neque enim etiam purus id. Tortor sit orci blandit
            cursus turpis.
          </p>{" "}
          <br />
          <NavLink to='/about'>
          <Button title="Explore Our Story" />
          </NavLink>
        </div>
      </div>

      {/* this is div after the man */}

      <div className=" mt-9 text-center  ">
        <h1 className="text-2xl font-bold">
          Our <span className="text-orange-600 "> Most Popular</span> Recipes
        </h1>
        <p className="text-slate-600">
          Browse through a varieties of recipes with fresh ingredients selected
          only from the best places
        </p>

        <div className="flex justify-center items-center gap-5 mt-10">
          <button
            onClick={() => {
              filterItems("All");
            }}
            className="bg-slate-300 rounded-2xl w-16"
          >
            All
          </button>
          <button
            onClick={() => {
              filterItems("Italian");
            }}
            className="bg-slate-300 rounded-2xl w-16"
          >
            Italian
          </button>

          <button
            onClick={() => {
              filterItems("Pakistani");
            }}
            className="bg-slate-300 rounded-2xl w-24"
          >
            Pakistani
          </button>
          <button
            onClick={() => {
              filterItems("Russian");
            }}
            className="bg-slate-300 rounded-2xl w-16"
          >
            Russian
          </button>
        </div>

        {/* this is for three items photo........ */}

        <div className=" flex items-center justify-center ">
          {filterProduct.length > 0 ? (
            <div className="  flex flex-wrap p-5 gap-20 justify-center items-center ">
              {filterProduct.map((items) => {
                return (
                  <div
                    key={items.id}
                    className=" h-44 w-52 justify-center items-center shadow-2xl shadow-slate-500 rounded-3xl   "
                  >
                    <img
                      src={items.image}
                      alt="menu"
                      className="w-64 p-5 rounded-3xl"
                    />
                    <p> Name:{items.name}</p>
                    <p className="text-orange-600">
                      Price:Rs {items.caloriesPerServing}
                    </p>
                    
                  </div>
                );
              })}
            </div>
          ) : recipes.length > 0 ? (
            <div className="  flex flex-wrap p-5 gap-20 justify-center items-center ">
              {recipes.map((items) => {
                return (
                  <div
                    key={items.id}
                    className=" shadow-2xl shadow-slate-500 rounded-3xl   "
                  >
                    <img
                      src={items.image}
                      alt="menu"
                      className="w-64 p-5 rounded-3xl"
                    />
                    <p> Name:{items.name}</p>
                    <p className="text-orange-600">
                      Price:Rs {items.caloriesPerServing}
                    </p>
                    <p className="text-lg italic">
                      prepTimeMinutes: {items.prepTimeMinutes}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <p> wait for a movement........ data is comming......</p>
          )}
        </div>

        {/* this is for button */}
        <div className="flex justify-center items-center mt-20">
          <NavLink to="/menu">
            <Button title="Explore Food Menu" />
          </NavLink>
        </div>

        <div className=" mt-7">
          <h1 className="text-2xl font-bold">
            {" "}
            <span className="text-orange-500">We Offer People</span> The Service
            They Want
          </h1>
        </div>

        {/* this is the place for the video */}
        <div className=" border-2  border-black h-96 w-[100%] flex justify-center mt-7 ">
          <img src={chefimg} alt="" className="w-[100%] h-[150%]" />
        </div>

        {/* this is after the video */}
        <div className=" flex justify-center items-center gap-40 mt-60">
          <img
            src={like}
            alt="qualityFood"
            className=" w-48"
          />
          <img
            src={party}
            alt="party_img"
            className="w-48"
          />
          <img
            src={chefCap}
            alt="chefCap_img"
            className="w-48"
          />
        </div>

        <div className="flex justify-center mt-14">
        <NavLink to="/services">
          <Button title="Explore Food Services" />
          </NavLink>
        </div>

        {/* this is for the girl */}
        <div className=" flex mt-10 gap-10 bg-slate-100 ">
          <div className="w-96 ml-64 text-left mt-16">
            <h1 className="text-3xl font-bold">
              200+ <span className="text-orange-500">Happy Customers</span>
            </h1>
            <p className="text-green-900 mt-5">
              What our customers say about us
            </p>
            <p className="text-lg italic text-slate-600">
              “Only the best momo you can find in the market. Different
              Varieties of momo to choose from. Will be visiting again soon”
            </p>

            <h1 className="text-2xl font-bold mt-2 mb-6">Livia Dias</h1>
            <div className="flex gap-3">
              <CiCircleChevLeft size={30} />
              <CiCircleChevRight size={30} />
            </div>
          </div>

          <div className=" ml-44 mt-5 mb-10">
            <img
              src={girl}
              alt="girl"
              className="w-80 h-96"
            />
          </div>
        </div>
      </div>
      

      <div className=" flex h-[600px] ">


        <div className="  h-[100%] w-[40%] mt-14 pl-4">
          {/* <img src={Map} alt="map" className="h-[100%] w-[100%]" /> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10488.777485450102!2d85.34282895596081!3d27.670556269639885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1737472831890!5m2!1sen!2snp" width="640"
         height="530" 
          
           allowfullscreen="" 
           loading="lazy" 
           // eslint-disable-next-line react/no-unknown-property
           referrerpolicy="no-referrer-when-downgrade">
            
           </iframe>
  

        </div>

        <div className=" w-[60%] p-8 mr-28 ">
          <div className=" shadow-sm w-[100%] h-[100%] ml-4 ">



            <h1 className="text-2xl font-bold ml-5 mt-5">Contact <span className="text-orange-600">Us</span></h1>
            <p className="text-slate-500 ml-5 mt-5">If you have any queries, send us a message. Our Friendly team would <br /> love to hear from you</p>

            <form className="ml-5 mt-5">
              {/* First Name */}
              <div className="flex gap-10 ">
              <div>
                <label className="block  mb-1 " htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  className=" p-2 border rounded w-96"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block  mb-1" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  className=" p-2 border rounded w-96"
                  required
                />
              </div>
              </div>

              {/* Purpose */}
              <div>
                <label className="block mb-1" htmlFor="purpose">
                  What Can We Do For You?
                </label>
                <input
                  type="text"
                  id="purpose"
                  name="purpose"
                  placeholder="Enter your purpose"
                  className=" w-full p-2 border rounded"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full p-2 border rounded"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block  mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  className="w-full h-11 p-2 border rounded"
                  rows="4"
                  required
                ></textarea>
              </div>
              <Button title='Send message'/>

            </form>

          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
