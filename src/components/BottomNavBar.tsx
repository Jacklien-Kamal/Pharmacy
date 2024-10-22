import React from "react";

import { HiOutlineMapPin } from "react-icons/hi2";
import { GrHomeRounded } from "react-icons/gr";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@radix-ui/react-dropdown-menu";
  import { RiArrowDropDownLine } from "react-icons/ri";
  import { Button } from "./ui/button";
const categories=[{id:1 , title:'beuty'} ,{id:2,title:"drugs"}]

export default  function BottomNavBar() {

  return (
    <div className="bg-[#623474]   py-2  text-white flex items-center px-72">

        <div className="px-2 text-xs flex items-center gap-x-2 cursor-pointer">| 
      <HiOutlineMapPin />  
         Sacramento,95829 
         <GrHomeRounded />
         Sacramento Supercenter
      </div>

      <div className="xl:flex xl:flex-wrap font-bold text-xs  w-2/3 gap-x-5  justify-center overflow-hidden sm:hidden ">
      
        {/* {categories.slice(0,7).map((cat,indx)=>(

            <a key={indx} className="hover:underline" href={`/departments/${cat.id}`}>{cat.title}</a>
        ))} */}
         {/* Departments Button */}
      <DropdownMenu>
          <DropdownMenuTrigger>
            <span className="text-white font-bold text-sm rounded-full flex items-center hover:bg-green-700/[.5] p-1 px-2">
              <RiArrowDropDownLine className=" h-5 w-5" />
              Departments
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuTrigger>
            <span className="text-white font-bold text-sm rounded-full flex items-center hover:bg-green-700/[.5] p-1 px-2">
              <RiArrowDropDownLine className=" h-5 w-5" />
              Departments
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuTrigger>
            <span className="text-white font-bold text-sm rounded-full flex items-center hover:bg-green-700/[.5] p-1 px-2">
              <RiArrowDropDownLine className=" h-5 w-5" />
              Departments
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuTrigger>
            <span className="text-white font-bold text-sm rounded-full flex items-center hover:bg-green-700/[.5] p-1 px-2">
              <RiArrowDropDownLine className=" h-5 w-5" />
              Departments
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuTrigger>
            <span className="text-white font-bold text-sm rounded-full flex items-center hover:bg-green-700/[.5] p-1 px-2">
              <RiArrowDropDownLine className=" h-5 w-5" />
              Departments
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuTrigger>
            <span className="text-white font-bold text-sm rounded-full flex items-center hover:bg-green-700/[.5] p-1 px-2">
              <RiArrowDropDownLine className=" h-5 w-5" />
              Departments
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="ms-32 mt-5 bg-gray-200">
          <DropdownMenuLabel><a href='/departments' className="font-bold hover:underline">All Departments</a></DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem className="cursor-pointer" >
              <a href='#'>cat1 </a>
          </DropdownMenuItem>
           
          </DropdownMenuContent>
       </DropdownMenu>

      {/* Services Button */}
      {/* <Button variant="ghost" className="text-white font-bold rounded-full flex items-center">
        <RiArrowDropDownLine className="mr-2 h-4 w-4" />
        Services
      </Button> */}
        </div>
    </div>
  );
}
