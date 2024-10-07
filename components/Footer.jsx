import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-900 py-6 px-4">
      <div className="flex items-center mb-4 sm:mb-0">
        <Image src={assets.logo_light} alt="Logo" width={120} />
      </div>
      <p className="text-sm text-gray-300 text-center sm:text-left">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src={assets.facebook_icon} alt="Facebook" width={40} className="hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Image src={assets.twitter_icon} alt="Twitter" width={40} className="hover:scale-110 transition-transform duration-300" />
        </a>
        <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
          <Image src={assets.googleplus_icon} alt="Google+" width={40} className="hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
