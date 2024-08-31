"use client"
import Sidebar from '@/components/Siderbar';
import React, { ReactNode, useState } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);



  return (

    <main className='relative'>
        
        <div className='flex'>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

            <section className='min-h-screen flex flex-1 flex-col '>
                <div className='px-6 pb-6 pt-5 max-md:pb-14 sm:px-6 mx-w-SM'>
                  <div className='w-full'>
                      {children}
                  </div>
                </div>
            </section>
        </div>
    </main>
  )
}

export default HomeLayout
