"use client";

import React from "react";
import { FaClock, FaQuestionCircle } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { TbReport } from "react-icons/tb";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../../components/ui/card"; // Adjust the path as needed


const ExamCard = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white">
      <Card className="w-full max-w-md p-2 m-4 bg-white rounded-lg shadow-md">
        <CardHeader className="flex flex-col items-center mb-4">
        <TbReport  size={54} className="text-blue-500"  />
          <CardTitle className="text-2xl font-bold text-center">Gk</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-4">
              <BiSolidCategory className="text-xl font-bold text-gray-600" />
              <div className="flex justify-space-between flex-row">
                <p className="text-sm text-gray-600">
                  <strong>Exam Category:</strong>
                </p>
                <p className="text-sm text-gray-600 ml-5">Category Name</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-xl font-bold text-gray-600" />
              <div className="flex flex-row">
                <p className="text-sm text-gray-600">
                  <strong>Total Duration:</strong>
                </p>
                <p className="text-sm text-gray-600 ml-6">5 minutes</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaQuestionCircle className="text-xl font-bold text-gray-600" />
              <div className="flex flex-row">
                <p className="text-sm text-gray-600">
                  <strong>Total Questions:</strong>
                </p>
                <p className="text-sm text-gray-600 ml-5">10</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-center mt-3">
         <Link href={"/question-quiz"}> <button className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
            Start Exam
          </button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ExamCard;
