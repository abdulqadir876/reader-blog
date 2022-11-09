import React from 'react'
import { useParams } from 'react-router-dom'
import { db } from "../firebase";
import { getDocs, getDoc, collection, doc } from "firebase/firestore";
import { useState, useEffect } from 'react';

const Article = () => {
  const [blog, setBlog] = useState([]);
  const projectCollectionRef = collection(db, "blog");


  const {id} = useParams();
  console.log(id)
  useEffect(() => {
    id && getBlogDetails();
  }, [id]);

  const getBlogDetails = async () => {
    const docRef = doc(db, "blog", id);
    const blogDetail = await getDoc(docRef);
    setBlog(blogDetail.data());
  };
  console.log(blog);
  return (
    <div className="w-[90%] mx-auto">
    <div className='grid grid-cols-6 mt-8'>
      {/* Blog */}
      <div className='col-span-4'>
        <div className='flex gap-36 items-center'>
      {/* author */}
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
              <h1 className="text-lg tracking-tight">{blog.author}</h1>
              <span className="h-1 w-1 bg-gray-light rounded-full"></span>
              <span className="text-[12px] text-gray">Apr 16, 2022</span>
            </div>
            <div>
              <span className="text-[13px] text-gray">
                UI designer at Amazon
              </span>
            </div>
          </div>
        </div>

      {/* Icons */}
      <div>
        icons
      </div>
        </div>
        
        {/* Desctiption */}
        <div className='mt-7'>
          <h1 className='text-[30px] font-bold'>{blog.title} </h1>
          <img className='w-[100%]  my-4' src={blog.image} alt="" />
          <p>{blog.description}</p>
        </div>
        {/* EndDesctiption */}
      </div>

      {/* Side */}
      <div>
        side
      </div>
    </div>
  </div>
  )
}

export default Article