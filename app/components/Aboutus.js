'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';
import animation4 from '@/app/assets/Animation7.json';
import Maison_Neue_Book from "next/font/local";

const maisonbook = Maison_Neue_Book({ src: '../maison/Maison_Neue_Book.ttf' });

export default function Aboutus() {
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: lottieRef, inView: lottieInView } = useInView({ triggerOnce: true });

  return (
    <div className="flex flex-col md:flex-row items-center p-6 gap-6 lg:ml-[165px] ml-0">
      {/* Text Content */}
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 lg:mb-10">
          Why Choose Us?
        </h1>
        <p className={`text-base md:text-lg lg:text-xl mb-6 ${maisonbook.className}`}>
          At PrismMotion, we believe that every video is a canvas for storytelling. With extensive experience in video editing and a deep passion for visual artistry, we are dedicated to creating videos that truly resonate with your audience. Our team goes beyond basic editing; we are a collective of creative professionals who excel in transforming ideas into visually stunning narratives.
        </p>
        <p className={`text-base md:text-lg lg:text-xl mb-4 flex items-start ${maisonbook.className}`}>
          <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l7-7-7-7"></path>
          </svg>
          Expert Team: Our team consists of industry professionals with a deep understanding of visual storytelling.
        </p>
        <p className={`text-base md:text-lg lg:text-xl mb-4 flex items-start ${maisonbook.className}`}>
          <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l7-7-7-7"></path>
          </svg>
          Customized Solutions: We offer personalized video editing services to meet your unique needs.
        </p>
        <p className={`text-base md:text-lg lg:text-xl mb-4 flex items-start ${maisonbook.className}`}>
          <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l7-7-7-7"></path>
          </svg>
          Fast Turnaround: We deliver high-quality results on time, every time.
        </p>
      </motion.div>
      
      {/* Lottie Animation */}
      <motion.div
        ref={lottieRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: lottieInView ? 1 : 0, scale: lottieInView ? 1 : 0.8 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex justify-center md:justify-end mt-10 mb-10"
      >
        <Lottie 
          animationData={animation4} 
          className="w-80 h-80 md:w-96 md:h-96 lg:w-[700px] lg:h-[700px]"
        />
      </motion.div>
    </div>
  );
}
