import { assets } from '@/assets/assets';
import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import { toast } from 'react-toastify'; // Ensure toast is imported
import './Header.css'; // Import the CSS file for animations
import Link from 'next/link';

const Header = () => {
  const [email, setEmail] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post('/api/email', formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    } else {
      toast.error("Error");
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle sidebar visibility
  };
  const [currentSentence, setCurrentSentence] = useState("");

  // Define your sentences
  const sentences = [
    "Explore the latest trends in technology.",
    "Dive into expert insights on digital marketing.",
    "Discover tips for effective content creation.",
    "Stay updated with the newest blogging strategies.",
    "Uncover the secrets of successful online businesses.",
  ];

  useEffect(() => {
    // Set the initial sentence
    setCurrentSentence(sentences[0]);
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % sentences.length; // Cycle through sentences
      setCurrentSentence(sentences[currentIndex]);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);
  return (
    <div className='py-5 py-5 md:px-16 lg:px-28'>
      <button onClick={toggleSidebar} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
        {isSidebarOpen ? "Continue Reading" : "Get Started"}
      </button>

      {/* Sidebar with animation, positioned on the right */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white p-4 shadow-lg transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <h2 className="text-xl font-semibold">Sidebar</h2>
        <button onClick={toggleSidebar} className="mt-2 mb-4 px-2 py-1 bg-red-600 text-white rounded">
          Close
        </button>
        <ul>
          <Link href = "/admin/addProduct"><li className="my-2">AddProduct</li></Link>
          <Link href = "/admin/blogList"><li className="my-2">My Blogs</li></Link>
          <Link href = "/admin/subscription"><li className="my-2">Subscription</li></Link>
        </ul>
      </div>

      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-5xl font-medium'>{currentSentence}</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Hello, I am Abhishrestha Tiwari</p>
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale -75 sm:scale-100 mx-auto mt-10 border border-black' action="">
        </form>
      </div>
    </div>
  );
}

export default Header;
