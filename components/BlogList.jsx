import { blog_data } from '@/assets/assets';
import React, { useState, useEffect } from 'react';
import BlogItem from './BlogItem';
import axios from 'axios';

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto px-4">
      {/* Menu Buttons */}
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu('All')}
          className={`py-2 px-6 rounded-md transition-colors duration-300 ${menu === "All" ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          All
        </button>
        <button
          onClick={() => setMenu('Technology')}
          className={`py-2 px-6 rounded-md transition-colors duration-300 ${menu === "Technology" ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Technology
        </button>
        <button
          onClick={() => setMenu('Startup')}
          className={`py-2 px-6 rounded-md transition-colors duration-300 ${menu === "Startup" ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Startup
        </button>
        <button
          onClick={() => setMenu('Lifestyle')}
          className={`py-2 px-6 rounded-md transition-colors duration-300 ${menu === "Lifestyle" ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          Lifestyle
        </button>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:mx-24 mb-16">
        {blogs.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => (
          <BlogItem
            key={index}
            id={item._id}
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
