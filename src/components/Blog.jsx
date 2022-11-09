import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'
import Filter from './Filter'
import supabase from '../config/supabaseClient'
import { db } from '../firebase'
import {collection, getDocs, serverTimestamp} from 'firebase/firestore'

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState('Loading...');

    const blogCollectionRef = collection(db, 'blog')

     // Fetch data
  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(blogCollectionRef);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(true);
      console.log(blogs);
    };
    getProjects();
  }, []);
  
  return (
    <div>
        {/* Filter */}
        <div>
            <Filter/>
            <div className='flex justify-between mt-10 '>
                <span className='text-lg'>Aricles</span>
                <select name="" id="" className='border-2 border-light text-[12px] px-6 py-2 rounded-full'>
                    <option value="">Following</option>
                    <option value="">Following</option>
                    <option value="">Following</option>   
                </select>
            </div>
        </div>
        <hr className='text-light my-4'/>
        {/* Blogs */}
        <div>
            <div className='flex justify-center items-center'>
             {isLoading}
            </div>
            {blogs.map((blog)=>{
                return(
                    <div key={blog.id}>
                        <BlogCards id={blog.id} title={blog.title} description={blog.description} image={blog.image} createdAt={blog.createdAt} author={blog.author} tags={blog.tags}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Blog