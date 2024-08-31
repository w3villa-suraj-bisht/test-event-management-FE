"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import apiClient from '../../../utils/api/apiClient';
import { signUp } from "@/utils/api/endPoints/signup";
import Link from "next/link";
// import "../../styles/signup.css"
import "../../styles/signup.css"

const SignIn = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = { name, email, password };
      console.log(data);
      
      const response = await signUp(data);
      console.log(response);
      localStorage.setItem("token",response.data.token);
      console.log(response.success);
      
      if(response.success){
        router.push('/dashboard');
      }
      // router.push('/success');
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="bg-gray-200 mainDiv h-screen min-h-screen w-full flex items-center justify-center">
      <div className="w-2/3 h-2/3 mainCard flex signupCard bg-white rounded-lg shadow-md">
        <div className="w-1/2 leftLogo h-full bg-gradient-to-r from-blue-600 to-blue-500 flex justify-center items-center">
          <img src="/img/bg_logo.png" className=" signinLogo w-2/3" alt="" />
        </div>
        <div className="flex rightCont items-center justify-center w-1/2">
          <div className="bg-white w-2/3 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>
            <form className="formSignup" onSubmit={handleSignup}>
              <div className="mb-2">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-center mb-4">{error}</p>}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg flex justify-center hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Signup
              </button>
              <p className="text-center mt-2">
                Have an account? <Link href="/signin" className="text-blue-500">Signin</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
