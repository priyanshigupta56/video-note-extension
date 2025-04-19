import React from "react";

const login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
        {/* Logo or Header */}
        <h2 className="text-2xl font-bold text-center text-black mb-6">🔐 Login to Vidio Notes</h2>
        
        {/* Login Form */}
        <form className="space-y-4">
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
          
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-xl text-lg font-semibold hover:bg-red-600 shadow-md transition"
          >
            Login
          </button>
        </form>
        
        {/* Extra Options */}
        <div className="text-center mt-4 text-sm text-gray-600">
          <a href="#" className="text-red-500 hover:underline">Forgot Password?</a>
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          Don't have an account? <a href="#" className="text-red-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default login;
