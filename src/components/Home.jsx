import React from 'react'
import Blog from './Blog'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div className='w-[90%] mx-auto mt-4'>
        <div className='md:grid grid-cols-6 gap-8'>
            <div className='col-span-4'>
                <Blog/>
            </div>
            <div className='border-light col-span-2 border-l-2 px-4 md:flex hidden'>
              <Sidebar/>
            </div>
        </div>
    </div>
  )
}

export default Home