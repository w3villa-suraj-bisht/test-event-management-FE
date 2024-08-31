"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ui_image from '../../../../public/img/bg_logo.png';

// api service


const SignIn = () => {
  const router = useRouter();
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  useEffect(() => {

  }, [])
  return (
    <div className="bg-gray-200 h-screen min-h-screen w-full flex items-center justify-center ">
      <div className="w-2/3 h-2/3 flex bg-white rounded-lg shadow-md">
        <div className="w-1/2 h-full bg-gradient-to-r from-blue-600 to-blue-500 flex justify-center items-center"><img src="/img/bg_logo.png" className="w-2/3" alt="" /></div>
        <div className="flex items-center justify-center w-1/2">
          <div className="  bg-white w-2/3 rounded-lg ">
            <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
            <form>
              <div className="mb-2">
                <label htmlFor="text" className="block text-gray-700 font-medium mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password:
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Login
              </button>
              <p className="text-center mt-2">Have a account? <a href="/signin" className="text-blue-500">Signin</a></p>
            </form>
          </div>
        </div>

      </div>
    </div>);
};

export default SignIn;
