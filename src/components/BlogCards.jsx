import React from "react";
import Moment from 'react-moment';
import { Link } from "react-router-dom";
const BlogCards = ({ id, title, description, author, image, tags, createdAt  }) => {
  const dateToFormat = createdAt.toDate();

  return (
    <div>
      {/* Cards */}
      <div>
        {/* Card Header */}
        <div className="flex items-center gap-4 leading-3">
          {/* image */}
          <div>
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://static.remove.bg/remove-bg-web/c05ac62d076574fad1fbc81404cd6083e9a4152b/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"
              alt=""
            />
          </div>
          {/* Name */}
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-lg tracking-tight">{author}</h1>
              <span className="h-1 w-1 bg-gray-light rounded-full"></span>
              {/* <span className="text-[12px] text-gray"> {createdAt.toDate().toLocaleDateString('en-GB')}</span> */}
              <span className="text-[12px] text-gray"> <Moment fromNow>{dateToFormat}</Moment></span>
            </div>
            <div>
              <span className="text-[13px] text-gray">
                UI designer at Amazon
              </span>
            </div>
          </div>
        </div>
        {/* Card Body */}
        <div className="md:grid md:grid-cols-3 gap-8 mt-5">
          <div className="col-span-2">
            <Link
              to={`/article/${id}`}
              className="text-[20px] text-gray-dark font-bold hover:underline line-clamp-2"
            >
              {title}
            </Link>
            <p className="text-[14px] text-gray mt-2 font-light line-clamp-3">
              {" "}
              {description}
            </p>
            <div className="mt-4 flex gap-2">
              {tags.map((tag, index) => {
                return (
                  <button key={index} className="btn-post">{tag}</button>
                );
              })}
            </div>
          </div>
          <div>
            <img
              className="w-64 rounded-lg hidden md:flex"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* End cards */}
      {/* Line */}
      <div>
        <hr className="text-light my-8" />
      </div>
    </div>
  );
};

export default BlogCards;
