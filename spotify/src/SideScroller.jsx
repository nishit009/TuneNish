import React, { useState } from "react";
import { Library, Search, List } from "lucide-react";
function SideScroller() {
  const [open, setOpen] = useState(false);
  const closeSideBar = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <>
      <div
        className={`h-screen ${
          open ? "w-[350px]" : "w-[80px]"
        } bg-black space-y-[10px] overflow-auto`}
      >
        <div className="h-[50px] w-full outline-white relative">
          <button
            className="ml-[10px] mt-[4px] border-transparent  hover:cursor-pointer rounded-xl"
            onClick={closeSideBar}
          >
            <Library
              size={45}
              className="hover:text-white text-[#DADADA]"
              strokeWidth={2}
            />
          </button>
          {open && (
            <span
              className="absolute text-[#DADADA] hover:text-white mt-[15px] font-bold ml-[4px]"
              onClick={closeSideBar}
            >
              Your Library
            </span>
          )}
        </div>
        {open && (
          <div className="h-[50px] w-full outline-white flex items-center justify-center relative">
            <input type="search"></input>
            <button className="absolute mr-[280px]">
              <Search size={24} color="white" />
            </button>
            <select className="relative text-white font-bold">
              <option>recents</option>
              <option>recently added</option>
              <option>creator</option>
              <option>alphabetical</option>
            </select>
          </div>
        )}

        <div className="h-[50px] w-full outline-white hover:bg-gray-600 rounded-[10px]"></div>
        <div className="h-[50px] w-full outline-white hover:bg-gray-600 rounded-[10px]"></div>
        <div className="h-[50px] w-full outline-white hover:bg-gray-600 rounded-[10px]"></div>
        <div className="h-[50px] w-full outline-white hover:bg-gray-600 rounded-[10px]"></div>
        <div className="h-[50px] w-full outline-white hover:bg-gray-600 rounded-[10px]"></div>
        <div className="h-[50px] w-full outline-white hover:bg-gray-600 rounded-[10px]"></div>
        <div className="h-[50px] w-full outline-white hover:bg-gray-600 rounded-[10px]"></div>
        <div className="h-[50px] w-full outline-white hover:bg-gray-600 rounded-[10px]"></div>
        <div className="h-[50px] w-full outline-white hover:bg-gray-600 rounded-[10px]"></div>
        <div className="h-[50px] w-full outline-white hover:bg-gray-600 rounded-[10px]"></div>
        <div className="h-[50px] w-full outline-white hover:bg-gray-600 rounded-[10px]"></div>
        <div className="h-[50px] w-full outline-white hover:bg-gray-600 rounded-[10px]"></div>
      </div>
    </>
  );
}

export default SideScroller;
