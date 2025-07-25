import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion } from "motion/react"
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'
import axios from 'axios';


const BlogList = () => {
    const [menu, setMenu] = useState("All")
    const {blogs, input} = useAppContext()

    const filteredBlogs = ()=>{
      if(input === ''){
        return blogs
      }
      return blogs.filter((blog) => blog.title.toLowerCase().includes(input.
        toLowerCase()) || blog.category.toLowerCase().includes(input.
        toLowerCase()))
    }

    
  return (
    <div>
        <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
            {blogCategories.map((item) =>(
               <div key={item} className='relative'>
  <button
    onClick={() => {
      setMenu(item);
    }}
    className={`cursor-pointer relative z-10 ${
      menu === item ? 'text-white px-4 pt-0.5' : 'text-gray-500'
    }`}
  >
    {item}
    {menu === item && ( 
      <motion.div layoutId='underline' transition={{type: 'spring', stiffness: 500, damping: 30}} className='absolute inset-0 h-7 -z-10 bg-primary rounded-full'></motion.div>
    )}
  </button>
</div>
            )
            )}
        </div>

        <div className='grid grid-cols sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 
        gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
            {filteredBlogs().filter((blog) => menu === "All" ? true : blog.category === menu).
            map((blog)=> <BlogCard key={blog._id} blog={blog}/>)}
        </div>
    </div>
  )
}

export default BlogList