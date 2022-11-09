import React from "react";

const Notice = () => {
  return (
    <div className="flex justify-center items-center bg-light rounded-lg w-full p-8">
      {/* Text */}
      <div>
        <h1 className="font-semibold text-sm">
          Get unlimited access to everything on Reader
        </h1>
        <span className="text-[12px] leading-1">
          Plans starting at less than $1/week.
        </span>
        <button className="btn-notice mt-4 block">Get unlimited access</button>
      </div>
      {/* Image */}
      <div className="text-gray">
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Notice;
