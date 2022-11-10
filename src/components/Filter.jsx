import React from "react";
import { Link } from "react-router-dom";

const Filter = () => {
  const filterBtns = ['test','Reactjs','design','development', 'ux', 'marketing']
  return (
    <div className="md:grid grid-cols-3 gap-4 items-center">
      {/* Search */}
      <div>
        <div className="flex gap-2 border-2 text-gray border-light px-4 py-2 rounded-full">
          <span>
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
          <input className="outline-none" type="text" placeholder="Search..." />
        </div>
      </div>
      {/* Topics */}
      <div className="md:ml-4 col-span-2  gap-2">
        <div className="md:flex justify-between items-center gap-4 mt-4 md:mt-0">
          <span className="text-gray text-[14px] ">My Topics:</span>
          <div className="flex flex-end gap-2 mt-2 md:mt-0">
         {/* {filterBtns.filter((item, index) => index % 4 === 0).map((item)=>(
          <div>{item}</div>
         ))} */}

            {filterBtns.map((filterBtn)=>(
              <Link to={`/tag/${filterBtn}`} className="btn capitalize">{filterBtn}</Link>
            ))}
  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
