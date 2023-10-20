import React from "react";
import image from "../static/images/profile.png";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


export const SideBar = () => {
  return (
    <>
      <header className="flex bg-violet-950 h-16 ">
        <img className="h-10 w-10 m-2 rounded-full" src={image} alt="" />
        <span className="text-zinc-50 mt-4 font-bold ">Tanka</span>
      </header>
      <div className="relative mt-2 rounded-md shadow-sm">

        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon className="h-6 w-6"/>
        </div>
        <input
          type="text"
          name="search"
          className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Find a User"
        />
        </div>
      <div className="flex hover:bg-violet-800">
        <img className="h-10 w-10 m-2 rounded-full" src={image} alt="" />
        <span className="text-zinc-50 mt-4 font-semibold ">Jasmina</span>
      </div>
    </>
  );
};
export default SideBar;
