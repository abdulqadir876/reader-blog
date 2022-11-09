import React from "react";

const People = ({name, title, profile}) => {

  return (
    <div>
      <div className="my-2">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 mt-4 leading-3">
            {/* image */}
            <div>
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={profile}
                alt={name}
              />
            </div>
            {/* Name */}
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-lg tracking-tight">{name}</h1>
              </div>
              <div>
                <span className="text-[13px] text-gray">
                  {title}
                </span>
              </div>
            </div>
          </div>
          {/* Follow */}
          <div>
            <button className="btn-follow">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
