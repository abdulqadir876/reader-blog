import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='w-[90%] mx-auto'>
    <div className="flex justify-between items-center py-4">
      {/* Humbegar Manu */}
      <div className="font-[10px]">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
      {/* Logo */}
      <div>
        <Link to="/" className="text-xl font-bold uppercase text-gray-dark">Reader</Link>
      </div>
      {/* Buttons */}
      <div className="flex items-center gap-8">
        <span className="text-gray" >
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
            </svg>
        </span>
        <div>
          <img
            className="w-8 h-8 rounded-full object-cover ring-1 ring-offset-4 ring-gray-500"
            src="https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
            alt=""
          />
        </div>
        <Link to="create" className="flex gap-2 items-center border-[1px] text-gray border-gray-light py-2 px-4 rounded-lg">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            ></path>
          </svg>
          <span className="text-sm">Write</span>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Header;
