import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-gray-500 text-white h-screen p-6 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center justify-center mb-10">
        <Image src={assets.logo} width={80} alt="Logo" className="rounded-full" />
      </div>

      {/* Links Section */}
      <div className="flex flex-col space-y-8">
        <Link href="/admin/addProduct" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out">
          <Image src={assets.add_icon} alt="Add Blogs" width={28} />
          <span className="hidden sm:block text-lg font-medium group-hover:text-teal-400">Add Blogs</span>
        </Link>

        <Link href="/admin/blogList" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out">
          <Image src={assets.blog_icon} alt="Blogs List" width={28} />
          <span className="hidden sm:block text-lg font-medium group-hover:text-teal-400">Blogs List</span>
        </Link>

        <Link href="/admin/subscriptions" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out">
          <Image src={assets.email_icon} alt="Subscription" width={28} />
          <span className="hidden sm:block text-lg font-medium group-hover:text-teal-400">Subscription</span>
        </Link>
      </div>

      {/* Footer */}
      <div className="mt-auto text-center">
        <p className="text-sm text-gray-500">&copy; 2024 YourBrand</p>
      </div>
    </div>
  );
};

export default Sidebar;
