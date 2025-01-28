import chefGirl from "../../assets/images/chefGirl.png";
import ingredient from "../../assets/images/ingredient.png";
import chefa from "../../assets/images/chefa.png";
import steammo from "../../assets/images/steammo.png";
import gchef from "../../assets/images/gchef.png";
import fmomo from "../../assets/images/fmomo.png";
import smilechef from "../../assets/images/smilechef.png";
import smomo from "../../assets/images/smomo.png";
import ceo from "../../assets/images/ceo.png";
import whitechef from "../../assets/images/whitechef.png";
import goldchef from "../../assets/images/goldchef.png";
import firechef from "../../assets/images/firechef.png";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function About() {
  return (
    <>
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
          <img src={chefGirl} alt="chef_girl_image" className="w-96 mt-5" />
        </div>
      </div>

      <div className="mt-7">
        <div className="  h-72 w-[100%]  justify-center mt-7 ">
          <img src={ingredient} alt="" className="w-[100%] h-[200%]" />
        </div>
      </div>

      <div className="justify-center text-center mt-96 pl-64 ">
        <div className="flex flex-col md:flex-row gap-64 items-center">
          <div className="mb-52">
            <h1 className="text-3xl font-bold">
              Our momos are{" "}
              <span className="text-orange-600">
                made <br /> with love
              </span>
            </h1>
            <p className="text-slate-500">
              Enjoy delicious and fresh momos,
              <br /> crafted with love and care to bring you <br />
              the perfect flavor. Indulge in the taste of happiness!
            </p>
          </div>
          <div className="relative mb-24">
            <img src={chefa} alt="Chef preparing momos" className="w-96 h-80" />
            <img
              src={steammo}
              alt="Steaming momos"
              className="w-28 h-28 absolute -bottom-8 -left-8"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-64 items-center">
          <div className="relative mb-24">
            <img src={gchef} alt="Chef preparing momos" className="w-96 h-80" />
            <img
              src={fmomo}
              alt="fried momos"
              className="w-28 h-28 absolute -bottom-8 -right-8"
            />
          </div>
          <div className="mb-72">
            <h1 className="text-3xl font-bold">
              Taste the diffrent with{" "}
              <span className="text-orange-600">
                <br />
                our Handcrafted momos
              </span>
            </h1>
            <p className="text-slate-500">
              Enjoy delicious and fresh momos,
              <br /> crafted with love and care to bring you <br />
              the perfect flavor. Indulge in the taste of happiness!
            </p>
          </div>
        </div>

        <div className="flex  gap-64 ">
          <div className="mb-52">
            <h1 className="text-3xl font-bold">
              Our momos are the <br /> perfect{" "}
              <span className="text-orange-600">blend of tradition</span> <br />
              and <span className="text-orange-600">innovation</span>
            </h1>
            <p className="text-slate-500">
              Enjoy delicious and fresh momos,
              <br /> crafted with love and care to bring you <br />
              the perfect flavor. Indulge in the taste of happiness!
            </p>
          </div>
          <div className="relative mb-24">
            <img
              src={smilechef}
              alt="Chef preparing momos"
              className="w-96 h-80"
            />
            <img
              src={smomo}
              alt="Steaming momos"
              className="w-60 h-44 absolute -bottom-16 -left-32"
            />
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="  h-72 w-[100%]  justify-center mt-7 ">
          <img src={ceo} alt="" className="w-[100%] h-[200%]" />
        </div>
      </div>


     
      <div className="mt-96">
       
        <div className="text-center font-bold">
          <h1 className=" text-5xl ">
            Meet The <span className="text-orange-600">Team</span></h1>
            <p className="text-green-800 mt-5">
              Our talented team members who delivers only the best results
            </p>
        </div>
      
        <div className="flex gap-4 justify-center mt-16">
        <img
              src={whitechef}
              alt="Chef preparing momos"
              className="w-64 h-96"
            />
            <img
              src={goldchef}
              alt="Chef preparing momos"
              className="w-64 h-96"
            />
            <img
              src={firechef}
              alt="Chef preparing momos"
              className="w-64 h-96"
            />
        </div>
        
        <div className="mt-8  pl-[355px] flex gap-[689px]">
          <h1 className="font-bold text-lg">01 <span className="text-slate-400 text-sm">/05</span></h1>
          <div className="flex gap-3">
          <FaRegArrowAltCircleLeft size={30} />
          <FaRegArrowAltCircleRight size={30}  />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
