"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// api service



const SignIn = () => {
  const router = useRouter();
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  useEffect(() => {

  }, [])
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div></div>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
        <form>
        <div className="mb-4">
            <label htmlFor="text" className="block text-gray-700 font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              autoComplete="off"
              id="name"
              value={name}
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
              value={email}
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
              value={password}
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
          <p className="text-center mt-2">Have a account? <Link href="/sigin" className="text-blue-500">Signin</Link></p>
        </form>
      </div>
    </div>  );
};

export default SignIn;
