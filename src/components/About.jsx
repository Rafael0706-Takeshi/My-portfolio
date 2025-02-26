import React from 'react';
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard=({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","sping",0.5*index)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shodow-card'>
        <div options={{max:45,scale:1,speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className="text-center text-white font-bold text-[20px]">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'> 
        Senior DevOps Full Stack Developer with over 11 years of experience in 
        designing and implementing scalable high-quality, tested, and documented 
        applications using Object-Oriented Design principles and DevOps practices. 
        Skilled in C++, JavaScript, TypeScript, Node.js, PHP, Java, Python, C#. 
        Proven ability to enhance system reliability, reduce operational costs, 
        and improve user satisfaction through cloud computing, CI/CD pipeline 
        implementation, and team mentoring. Adept at leading teams, ensuring code
        quality, and optimizing performance in dynamic development environments.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
       {services.map((service,index)=>(<ServiceCard key={service.title} index={index}{...service}/>))}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")