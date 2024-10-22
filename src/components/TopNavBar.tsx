import { LayoutGrid } from "lucide-react";

import { Button } from "@/components/ui/button";

import { FaCartPlus } from "react-icons/fa6";


import { FaRegUser } from "react-icons/fa";

import SearchBar from "./SearchBar";
import logo from "../assets/file.png";
export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function TopNavBar() {
    // 3f854a
  return (
    <div className="flex justify-center items-center  py-4 bg-[#9150aa] gap-1 z-10 px-72">
      {/* Logo */}
      <div className="flex justify-center items-center">
      <img src={logo} className="w-20" />
      <h1 className=" pe-4 text-3xl font-bold text-white ">
     Pharmacy
      </h1>
      </div>
      
  
      {/* search bar */}
      <SearchBar />
      <div className="flex flex-col -3 items-center justify-center mx-7 ">
        <FaRegUser className="text-white text-2xl " />
        <a
          href="#"
          className="text-white  underline underline-offset-2 hover:no-underline hover:text-red-500"
        >
          Log In{" "}
        </a>
      </div>
      <div className="flex flex-col  items-center justify-center pt-1 ">
      <FaCartPlus className="text-white text-2xl " />
        <a
          href="#"
          className="text-white text-sm pt-1"
        >
         0.00$
        </a>
      </div>
    </div>
  );
}
