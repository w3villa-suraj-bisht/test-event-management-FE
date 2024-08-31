"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";

// api service



const SignIn = () => {
  const router = useRouter();



  useEffect(() => {

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="bg-[#f1f1f1]">
      <div className="container mx-auto p-4 flex justify-center items-center min-h-screen ">
        <div className="w-full max-w-md" >
          hello world
        </div>
      </div>
    </div>
  );
};

export default SignIn;
