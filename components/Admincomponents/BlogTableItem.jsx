import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const BlogTableItem = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {
  const BlogDate = new Date(date);

  return (
    <tr className="bg-white hover:bg-gray-100 transition-colors duration-300 border-b border-gray-200">
      {/* Author & Image */}
      <th
        scope="row"
        className="flex items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          width={40}
          height={40}
          src={authorImg ? authorImg : assets.profile_icon}
          alt="Author Profile"
          className="rounded-full"
        />
        <p>{author ? author : 'No author'}</p>
      </th>

      {/* Title */}
      <td className="px-6 py-4 text-gray-700">{title ? title : 'No title'}</td>

      {/* Date */}
      <td className="px-6 py-4 text-gray-500">{BlogDate.toDateString()}</td>

      {/* Delete Action */}
      <td
        onClick={() => deleteBlog(mongoId)}
        className="px-6 py-4 text-red-500 cursor-pointer hover:text-red-700 transition duration-200"
      >
        x
      </td>
    </tr>
  );
};

export default BlogTableItem;
