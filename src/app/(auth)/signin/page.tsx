"use client";
import React, { useState,ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import ui_image from '../../../../public/img/bg_logo.png';
import { signIn } from "@/utils/api/endPoints/auth";
import Link from "next/link";

const SignIn = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState<'user' | 'admin'>('user');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleConfirmForm = async () => {
    const requestBody = {
      email: formData.email,
      password: formData.password,
      type: activeButton 
      
    };

    try {
      const response = await signIn(requestBody);
        console.log("received response is:",response)
         localStorage.setItem("token",response.data.token);
          if(response.success){
            router.push('/dashboard');
          }
            
    } catch (error) {
      if (error instanceof Error) {
        if ((error as any).response) {
          console.error("Failed to Login:", (error as any).response.data);
        } else {
          console.error("Failed to Login:", error.message);
        }
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  const handleButtonClick = (buttonType: 'user' | 'admin') => {
    setActiveButton(buttonType);
    
  };

  return (
    <div className="bg-gray-200 h-screen min-h-screen w-full flex items-center justify-center">
      <div className="w-2/3 h-2/3 flex bg-white shadow-md">
        <div className="w-1/2 h-full bg-gradient-to-r from-blue-600 to-blue-500 flex justify-center items-center">
          <img src="/img/signup.png" className="w-2/3" alt="Sign Up" />
        </div>
        <div className="flex items-center justify-center w-1/2">
          <div className="bg-white w-2/3 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

            {/* Buttons for User and Admin */}
            <div className="flex flex-row items-center text-center justify-center mb-6">
              <button
                onClick={() => handleButtonClick('user')}
                className={`py-2 px-4 transition duration-300 ease-in-out ${
                  activeButton === 'user'
                    ? 'bg-blue-500 text-white rounded-l-lg'
                    : 'bg-gray-200 text-black-500 rounded-l-lg'
                }`}
              >
                User
              </button>
              <button
                onClick={() => handleButtonClick('admin')}
                className={`py-2 px-4 transition duration-300 ease-in-out ${
                  activeButton === 'admin'
                    ? 'bg-blue-500 text-white rounded-r-lg'
                    : 'bg-gray-200 text-black-500 rounded-r-lg'
                }`}
              >
                Admin
              </button>
            </div>

            <form onSubmit={handleConfirmForm}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  id="email"
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div
                // type="submit"
                onClick={handleConfirmForm}
                className="w-full bg-blue-500 text-center text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Login
              </div>
              <p className="text-center mt-6">
                Don't have an account? <Link href="/signup" className="text-blue-500">Signup</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
