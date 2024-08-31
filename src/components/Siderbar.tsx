"use client";

import React, { useLayoutEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { GoLink } from "react-icons/go";

import { IoMdTime } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";
import { FaChevronDown, FaUsersBetweenLines, FaUsersRays } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";


import {adminSiderbar } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons/lib";

import Image from "next/image";
import { PiNewspaperLight } from "react-icons/pi";


const iconComponents: Record<string, IconType> = {
  GoLink,
  CiCalendar,
  IoMdTime,
  RiTeamLine,
  MdOutlineDashboard
};
const iconRecordedComponents: Record<string, IconType> = {
  MdOutlineDashboard,
  PiNewspaperLight,
  FaUsersBetweenLines
};
const iconLiveComponents: Record<string, IconType> = {
  PiNewspaperLight,
  FaUsersBetweenLines,
  CiCalendar
};

const Sidebar = ({sidebarOpen, setSidebarOpen}: any) => {
  const pathname = usePathname();
  const [userName, setUserName] = useState('')
  const router = useRouter();
  useLayoutEffect(() => {
    const userName = localStorage.getItem('username');
    setUserName(userName || '')
  }, [])

  return (
    <div>
    <div onClick={()=> setSidebarOpen(false)} className={`transLayers ${sidebarOpen ? 'transLayer' : ''}`}></div>
    <section className={`sidebar-menu sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-slate-100  text-black max-sm:hidden lg:w-[264px]  ${sidebarOpen ? 'sidebar-open' : ''}` } >
      <div className="flex justify-center pl-6 pr-6">
        <Image src={""} alt="logo" className="w-1/2" />
      </div>

      <div className="sidebar flex flex-1 flex-col sidebarHeightManage">
        <hr className="mt-3" />
        {adminSiderbar.map((link) => {
          let isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
         if(link.route =="/live-interview/manage-interview" && pathname =="/live-interview/create-interview"){
            isActive = true
         }
          const IconComponent = iconLiveComponents[link.icon];
          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex space-x-4 items-center rounded-lg justify-start",
                {
                  active: isActive,
                }
              )}
              prefetch
              onClick={()=> setSidebarOpen(false)}
            >
              {IconComponent && <IconComponent />}
              <p className={cn("text-lg font-sembold max-lg", { "font-bold": isActive })}> {link.label}</p>
            </Link>
          );
        })}

      </div>
    </section>
    </div>
  );
};

export default Sidebar;
