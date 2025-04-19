import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

const signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-black mb-6">📝 Sign Up for Vidio Notes</h2>
        
        {/* Signup Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          
          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-red-600 shadow-md transition"
          >
            Sign Up
          </button>
        </form>
        
        {/* OR Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        
        {/* Social Signup Options */}
        <div className="flex flex-col gap-3">
          <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-xl shadow-md bg-gray-100 hover:bg-gray-200">
            <FcGoogle size={20} /> Sign up with Google
          </button>
          <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-xl shadow-md bg-gray-100 hover:bg-gray-200">
            <FaFacebook size={20} className="text-blue-600" /> Sign up with Facebook
          </button>
          <button className="w-full flex items-center justify-center gap-2 border py-2 rounded-xl shadow-md bg-gray-100 hover:bg-gray-200">
            <FaApple size={20} className="text-black" /> Sign up with Apple
          </button>
        </div>
        
        {/* Extra Options */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <a href="#" className="text-red-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default signup;
