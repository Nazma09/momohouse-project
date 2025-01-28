import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Momologo from "../../assets/images/momologo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className=" flex gap-40 mt-36">
        <div className=" ml-52">
          <div className="flex gap-2">
            <img src={Momologo} alt="Momologo" className="h-7" />

            <h1 className="text-green-800 text-xl font-bold"> momo</h1>
          </div>
          <p className="text-slate-600">
            Lorem ipsum dolor sit amet consectetur. Elit sem <br /> tempor
            egestas molestie. Volutpat quis egestas <br /> porttitor turpis sit
            in. Lorem nunc nullam morbi urna <br />
            amet suspendisse nullam ac vivamus.
          </p>
        </div>

        <div className="flex justify-center items-center gap-14 ">
          <div>
            <h1 className="text-green-800 font-bold">momos</h1>
            <div className="text-slate-600">
              <p><NavLink to='/about'>About Us</NavLink> </p>
              <p><NavLink to='/menu'>Our Menu</NavLink></p>
              <p><NavLink to='/services'> Services</NavLink>Our</p>
              <p><NavLink to='/contact'>Contact Us</NavLink></p>
            </div>
          </div>

          <div className="mb-5 pl-16">
            <h1 className="text-green-800 font-bold">Legals</h1>
            <div className="text-slate-600">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Support</p>
            </div>
          </div>

          <div className="mb-6 pl-16">
            <h1 className="text-green-800 font-bold">Follow Us</h1>
            <div className="flex gap-6 mt-3 text-2xl text-slate-500">
              <NavLink
                to="https://www.facebook.com/"
                target="_blank"
                className="text-2xl text-slate-500"
              >
                <FaFacebook />
              </NavLink>

              <NavLink
                to="https://www.linkedin.com/feed/"
                target="_blank"
                className="text-2xl text-slate-500"
              >
                <FaLinkedin />
              </NavLink>

              <NavLink
                to="https://en.wikipedia.org/wiki/Twitter"
                target="_blank"
                className="text-2xl text-slate-500"
              >
                <AiFillTwitterCircle />
              </NavLink>
            </div>
            <div className="flex gap-6 mt-5 text-2xl text-slate-500">
              <NavLink
                to="https://www.youtube.com/"
                target="_blank"
                className="text-2xl text-slate-500"
              >
                <FaYoutube />
              </NavLink>
              <NavLink
                to="https://www.instagram.com/"
                target="_blank"
                className="text-2xl text-slate-500"
              >
                <FaInstagramSquare />
              </NavLink>

              <NavLink
                to="https://www.tiktok.com/"
                target="_blank"
                className="text-2xl text-slate-500"
              >
                <AiFillTikTok />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center text-center justify-center mt-16 mb-16">
        <p>Copyright ©️2025 Everest Momo Pvt Ltd. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Footer;
