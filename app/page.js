'use client'
import { useEffect } from "react";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  useEffect(() => {
    const bodyStyle = document.body.style;
    let angle = 270; // Starting angle for the gradient
    const colors = [
      ['#ff7e5f', '#feb47b'],
      ['#6a11cb', '#2575fc'],
      ['#ff6a6a', '#ffba6a'],
      ['#1f4037', '#99f2c8'],
    ];
    
    let currentIndex = 0;

    // Set initial transition style for smoothness
    bodyStyle.transition = "background 2s ease"; // Smooth transition for 2 seconds

    const changeGradient = () => {
      bodyStyle.background = `linear-gradient(${angle}deg, ${colors[currentIndex][0]}, ${colors[currentIndex][1]})`;
      currentIndex = (currentIndex + 1) % colors.length; // Cycle through colors
    };

    const intervalId = setInterval(changeGradient, 2000); // Change every 5 seconds

    // Set the initial gradient
    changeGradient();

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ToastContainer theme="dark" />
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}
