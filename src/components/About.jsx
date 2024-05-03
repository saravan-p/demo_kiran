import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" style={{ width: '25rem', height: '7rem' }} />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};


const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
       
  <p>I'm Kiran Reddy, a committed computer scientist with a Master's degree from the University of Maryland, Baltimore County. My background includes a lot of work in software development 
    and machine learning. I've achieved a lot academically and have used cutting-edge technologies to significantly impact various projects. These include monitoring the environment for NASA, 
    developing software backends for NTT Data, and creating new solutions for Zensar Technologies and DataLore Labs.</p>

  <p>My professional life is shaped by deep knowledge in technology and a strong desire to use technology to make a real difference. 
    One of the main highlights of my career is my work with NASA's Nova Project, where I helped make big improvements in detecting air quality 
    using machine learning, improving how we monitor the environment on Earth and beyond.</p>

  <p>In software development, I am skilled in handling everything from building complete applications to managing complex backend operations 
    and integrating data. I work with a wide range of tools and programming languages, including .NET, Python, C#, and SQL. My projects focus on 
    designing for users and using data to make things better and more efficient.</p>

  <p>I also actively contribute to academic discussions, having written papers and a book on subjects from machine learning in healthcare to the technical 
    details of networks in the Internet of Things. My forward-thinking approach to technology and solving real 
    problems makes me a valuable member of any team, always pushing for innovation and excellence in everything I do.</p>
  </motion.p> */}

<motion.p
    variants={fadeIn('', '', 0.1, 1)}
    className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
  >
    I'm Kiran Reddy, a committed computer scientist with a Master's degree from the University of Maryland, Baltimore County. My background includes a lot of work in software development and machine learning. I've achieved a lot academically and have used cutting-edge technologies to significantly impact various projects. These include monitoring the environment for NASA, developing software backends for NTT Data, and creating new solutions for Zensar Technologies and DataLore Labs.
  </motion.p>
  <motion.p
    variants={fadeIn('', '', 0.1, 1)}
    className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
  >
    My professional life is shaped by deep knowledge in technology and a strong desire to use technology to make a real difference. One of the main highlights of my career is my work with NASA and Nova Project, where I helped make big improvements in detecting air quality using machine learning, improving how we monitor the environment on Earth and beyond.
  </motion.p>
  <motion.p
    variants={fadeIn('', '', 0.1, 1)}
    className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
  >
    In software development, I am skilled in handling everything from building complete applications to managing complex backend operations and integrating data. I work with a wide range of tools and programming languages, including .NET, Python, C#, and SQL. My projects focus on designing for users and using data to make things better and more efficient.
  </motion.p>
  <motion.p
    variants={fadeIn('', '', 0.1, 1)}
    className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
  >
    I also actively contribute to academic discussions, having written papers and a book on subjects from machine learning in healthcare to the technical details of networks in the Internet of Things. My forward-thinking approach to technology and solving real problems makes me a valuable member of any team, always pushing for innovation and excellence in everything I do.
  </motion.p>
      <div className="mt-40 flex flex-wrap gap-10" >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} style={{ width: '25rem', height: '7rem' }} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
