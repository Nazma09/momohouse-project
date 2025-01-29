
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { FcGoogle } from "react-icons/fc";




const Login = () => {
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
 // Navigate to homepage after successful login
    navigate('/');
  };
 const {loginWithRedirect } = useAuth0();
 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">

        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>


          <button
          onClick={() =>
            loginWithRedirect()
          }
          type="button"
          className="flex items-center gap-2 justify-center border-2 border-slate-500 mt-3 w-full py-2 px-4 text-black font-medium rounded-md hover:text-white hover:bg-green-700"
        >
          <FcGoogle size="25" />
          Login with Google
        </button>

        </form>
        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <NavLink to='/signup' className="text-green-500 hover:underline">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
