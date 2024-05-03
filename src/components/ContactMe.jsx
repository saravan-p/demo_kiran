import React from 'react';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';



const ContactMe = () => {
  // Your contact details
  const name = 'Kiran Surya Sekhara Reddy ';
  const email = 'Kirankanna12345@gmail.com';
  const phoneNumber = '+1 667-369-8556';
  const address = '1133 Linden Avenue, Halethorpe MD 21227';

  return (
    <div className="flex-[0.75] bg-jet p-8 rounded-2xl">
  

    <div className="container mx-auto px-4">
      <motion.div  className="mt-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-6">
          Contact Me
        </h1>
        <div className="max-w-lg mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
            <p>{name}</p>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <p>{email}</p>
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <p>{phoneNumber}</p>
          </div>
          <div className="mb-6">
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
            <p>{address}</p>
          </div>
        </div>
        <p className="text-center text-gray-700 mb-12">
          Feel free to reach out to me for any inquiries or collaboration opportunities.
        </p>
        
      </motion.div>
    </div>
    </div>
  );
};

//export default ContactMe;
export default SectionWrapper(ContactMe, 'ContactMe');
// src/components/index.js


