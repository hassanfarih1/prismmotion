'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import logo from '@/app/assets/logo.png';
import Maison_Neue_Light from "next/font/local";
import Maison_Neue_Book from "next/font/local";
import Link from 'next/link';
import Lottie from 'lottie-react';
import animation4 from '@/app/assets/Animation4.json';
import animation5 from '@/app/assets/Animation5.json';
import { motion, useAnimation } from 'framer-motion';

const maisonlight = Maison_Neue_Light({ src: '../maison/Maison_Neue_Light.ttf' });
const maisonbook = Maison_Neue_Book({ src: '../maison/Maison_Neue_Book.ttf' });

export default function Navbar() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1 }
    });
  }, [controls]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex flex-col items-center p-4 space-y-4 md:space-y-6 lg:space-y-8">
      <Link href='/'>
        <Image src={logo} alt="Logo" width={150} height={50} className="mb-4 mt-[-20px] md:mb-6 lg:mb-8" />
      </Link>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        className="relative mt-8 flex flex-col items-center space-y-6"
      >
        {/* Animations */}
        <Lottie 
          animationData={animation5} 
          loop={false} 
          className="absolute top-[-40px] left-[-70px] md:left-[-120px] lg:left-[-170px] w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48"
        />
        <Lottie 
          animationData={animation5} 
          loop={false} 
          className="absolute top-[-60px] right-[-70px] md:right-[-120px] lg:right-[-170px] w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 scale-x-[-1]"
        />
        <Lottie 
          animationData={animation4} 
          loop={false} 
          className="absolute top-[100px] right-[-40px] md:right-[-80px] lg:right-[-80px] w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48"
        />
        <Lottie 
          animationData={animation4} 
          loop={false} 
          className="absolute top-[100px] left-[-40px] md:left-[-80px] lg:left-[-90px] w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 scale-x-[-1]"
        />
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center w-full max-w-screen-lg relative z-10">
          Transform Your Vision into Stunning Videos
        </h1>
        
        {/* Subheading */}
        <h3 className={`text-lg md:text-xl lg:text-2xl text-center text-gray-800 ${maisonlight.className}`}>
          Expert video editing services that bring your ideas to life.
        </h3>
        
        {/* Button */}
        <button 
          onClick={scrollToContact}
          className={`bg-black text-white text-base md:text-lg py-3 md:py-4 px-8 md:px-10 rounded-lg ${maisonbook.className} hover:bg-gray-800 transition duration-300 mt-6 mb-6`}
        >
          Get started
        </button>
        
        {/* Video */}
        <video 
          src="/vid1.mp4"
          loop 
          muted 
          autoPlay
          className="mt-8 rounded-lg shadow-lg w-full max-w-screen-lg"
          width="1200"
        />
      </motion.div>
    </div>
  );
}
