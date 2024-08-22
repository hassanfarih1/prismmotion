'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';
import animation4 from '@/app/assets/Animation1.json';
import animation5 from '@/app/assets/Animation5.json';

export default function Showcase() {
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: videoRef, inView: videoInView } = useInView({ triggerOnce: true });

  return (
    <div className="flex flex-col items-center p-4">
      {/* Animated Header */}
      <motion.h1
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
      >
        Take a Look at <span className='underline decoration-pink-500'>Our Work</span>
      </motion.h1>
      
      {/* Animated Video Gallery */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12">
        <motion.video
          ref={videoRef}
          src='/vid2.mp4'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: videoInView ? 1 : 0, scale: videoInView ? 1 : 0.8 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg border"
          controls
        />
        <motion.video
          src='/vid3.mp4'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: videoInView ? 1 : 0, scale: videoInView ? 1 : 0.8 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg border"
          controls
        />
        <motion.video
          src='/vid4.mp4'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: videoInView ? 1 : 0, scale: videoInView ? 1 : 0.8 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg border"
          controls
        />
      </div>
    </div>
  );
}
