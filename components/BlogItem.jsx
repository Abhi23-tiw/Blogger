import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className="max-w-xs sm:max-w-md bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt=""
          width={400}
          height={300} // Adjusted the height for better aspect ratio
          className="w-full h-48 object-cover" // Cover image with specified height
        />
      </Link>
      <div className="p-4">
        <p className="mb-2 px-2 py-1 inline-block bg-teal-500 text-white text-xs font-semibold rounded-full">{category}</p>
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">{title}</h5>
        <p className="mb-4 text-sm text-gray-700 line-clamp-3">{description}</p>
        <Link href={`/blogs/${id}`} className="inline-flex items-center text-teal-500 font-semibold hover:underline">
          Read More <Image src={assets.arrow} className="ml-2" alt="" width={12} height={12} />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
