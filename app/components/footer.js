'use client'
import React from 'react';
import Image from 'next/image';
import logo from '@/app/assets/logo.png';
import Maison_Neue_Book from "next/font/local";
const maisonbook = Maison_Neue_Book({ src: '../maison/Maison_Neue_Book.ttf' });
import Lottie from 'lottie-react';
import animation4 from '@/app/assets/Animation4.json';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Footer() {
  const { ref: footerRef, inView: isInView } = useInView({ triggerOnce: true });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={footerRef} 
      className={`relative flex flex-col items-center justify-center p-6 mt-[300px] text-center ${maisonbook.className}`}
    >
      {/* Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-7xl font-bold mb-6 relative"
      >
        So what are you waiting for? Join PrismMotion to bring your content alive.

        {/* Animations */}
        <div className={`absolute top-[-170px] left-0 right-0 flex justify-between px-4 transition-opacity ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <Lottie 
            animationData={animation4} 
            loop={false}
            className="w-24 h-24 md:w-32 md:h-32 scale-y-[-1] scale-x-[-1]"
          />
          <Lottie 
            animationData={animation4} 
            loop={false}
            className="w-24 h-24 md:w-32 md:h-32 scale-y-[-1] "
          />
        </div>

        <div className={`absolute bottom-[-120px] left-0 right-0 flex justify-between px-4 transition-opacity ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <Lottie 
            animationData={animation4} 
            loop={false}
            className="w-24 h-24 md:w-32 md:h-32 scale-x-[-1]"
          />
          <Lottie 
            animationData={animation4} 
            loop={false}
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>
      </motion.h1>

      {/* Button */}
      <motion.button 
        onClick={scrollToContact}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
        className="bg-black text-white py-6 px-12 mt-10 rounded-lg shadow-lg text-lg font-semibold transition-transform transform hover:scale-105"
      >
        Get started
      </motion.button>

      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
        className="mt-6 md:mt-8"
      >
        <Image src={logo} alt="Logo" width={400} />
      </motion.div>
    </div>
  );
}
