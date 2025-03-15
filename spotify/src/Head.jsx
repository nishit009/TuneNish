import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Home, Bell, User, Search, MoreHorizontal } from "lucide-react";

function Head() {
  return (
    <>
      <nav className="w-full h-[50px] bg-black">
        <ul className="flex justify-between items-center align-middle">
          <div className="flex justify-center items-center gap-x-[20px]">
            <li>
              <button className="p-3">
                <MoreHorizontal size={24} color="white" />
              </button>
            </li>
            {/* <li>
              <button className="p-3">
                <ChevronRight size={24} color="white" />
              </button>{" "}
              {/* Forward */}
            {/* </li> */} */
          </div>
          <div className="flex justify-center items-center gap-x-[20px]">
            <li>
              <button className="p-3">
                <Home size={24} color="white" />
              </button>
            </li>
            <li>
              <button className="absolute ">
                <Search size={24} color="white" />
              </button>
              <input type="search" />
            </li>
          </div>
          <div className="flex justify-center items-center gap-x-[30px] mr-[30px]">
            <li>
              <button>
                <button className="p-3">
                  <Bell size={24} color="white" />
                </button>
              </button>
            </li>
            <li>
              <button>
                <button className="p-3">
                  <User size={24} color="white" />
                </button>
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Head;
