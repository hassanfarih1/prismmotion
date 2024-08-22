'use client'

import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Maison_Neue_Book from "next/font/local";
import Lottie from 'lottie-react';
import animation4 from '@/app/assets/Animation3.json';
import animation5 from '@/app/assets/Animation6.json';

const maisonbook = Maison_Neue_Book({ src: '../maison/Maison_Neue_Book.ttf' });

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { ref: cardRef, inView: cardInView } = useInView({ triggerOnce: true });
  const { ref: lottieRef, inView: lottieInView } = useInView({ triggerOnce: true });

  const cardControls = useAnimation();
  const lottieControls = useAnimation();

  React.useEffect(() => {
    if (cardInView) {
      cardControls.start({ opacity: 1, y: 0 });
    } else {
      cardControls.start({ opacity: 0, y: 50 });
    }
  }, [cardInView, cardControls]);

  React.useEffect(() => {
    if (lottieInView) {
      lottieControls.start({ opacity: 1, scale: 1 });
    } else {
      lottieControls.start({ opacity: 0, scale: 0.8 });
    }
  }, [lottieInView, lottieControls]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ fullName: '', email: '', message: '' });
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`flex flex-col items-center justify-center space-y-6 p-6 mt-44 ${maisonbook.className}`}>
      
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={cardControls}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-8 text-center"
      >
        Let's Work Together!
      </motion.h1>

      {/* Container for Contact Card and Animations */}
      <div className="relative w-full max-w-3xl">
        {/* Contact Card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 50 }}
          animate={cardControls}
          transition={{ duration: 0.6 }}
          className="bg-black text-white p-12 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2 z-10"
        >
          <div className="flex flex-col space-y-6">
            <label className="font-semibold text-lg">Your Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full name"
              className="border border-gray-300 text-black rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <label className="font-semibold text-lg">Your Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="border border-gray-300 text-black rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <label className="font-semibold text-lg">Your Request:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className="border border-gray-300 text-black rounded-lg p-4 h-40 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-white text-black py-4 px-6 rounded-lg mt-4 w-full transition-transform transform hover:scale-105"
            >
              {isSubmitting ? 'Submitting...' : 'Contact Us'}
            </button>
            {submitSuccess && <p className="text-green-500">Message sent successfully!</p>}
          </div>
        </motion.div>

        {/* Lottie Animations */}
        <motion.div
          ref={lottieRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={lottieControls}
          transition={{ duration: 0.6 }}
          className="absolute top-0 right-[-150px] w-[200px] z-20"
        >
          <Lottie 
            animationData={animation4} 
            loop
            className="w-full h-full"
          />
        </motion.div>

        <motion.div
          ref={lottieRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={lottieControls}
          transition={{ duration: 0.6 }}
          className="absolute bottom-0 left-[-150px] w-[200px] z-20"
        >
          <Lottie 
            animationData={animation4} 
            loop
            className="w-full h-full"
          />
        </motion.div>

        <motion.div
          ref={lottieRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={lottieControls}
          transition={{ duration: 0.6 }}
          className="absolute bottom-0 right-[-150px] w-[200px] z-20"
        >
          <Lottie 
            animationData={animation5} 
            loop
            className="w-full h-full"
          />
        </motion.div>

        <motion.div
          ref={lottieRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={lottieControls}
          transition={{ duration: 0.6 }}
          className="absolute top-0 left-[-150px] w-[200px] z-20"
        >
          <Lottie 
            animationData={animation5} 
            loop
            className="w-full h-full"
          />
        </motion.div>

      </div>
    </section>
  );
}
