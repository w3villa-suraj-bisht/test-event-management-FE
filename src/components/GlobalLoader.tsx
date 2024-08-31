"use client"
// src/components/Loader.tsx
import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
// import { RootState } from '../app/store';

const GlobalLoader: React.FC = () => {
  const loading = useSelector((state: RootState) => state?.loader?.loading);

  return loading ? (
    <>
       <div className="global-loader-overlay"></div>
       <div className="global-loader-container">
        <div className="global-loader"></div>
      </div>

    </>
  ) : null;
};

export default GlobalLoader;
