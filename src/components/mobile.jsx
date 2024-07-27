/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { motion, useInView } from "framer-motion";
import Image from 'next/image'
import React, { useRef } from 'react'

const mobile = () => {
    
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, 
    { margin: "-100px" });
  return (
  
<div>
{/* EXPERIENCE CONTAINER */}
<div
          className="flex flex-col gap-12 justify-center pb-48"
          ref={experienceRef}
        >
          {/* EXPERIENCE TITLE */}
          <motion.h1
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            transition={{ delay: 0.2 }}
            className="font-bold text-2xl"
          >
            EXPERIENCE
          </motion.h1>
          {/* EXPERIENCE LIST */}
          <motion.div
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            className=""
          >
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              
              {/* LEFT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-white/10 backdrop-blur-lg 
         shadow-[1px_1px_5px_#BABECC,_-5px_-5px_10px_#ffffff73]    p-3 font-semibold rounded-b-lg rounded-s-lg">
                Freelancer
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                I provided web solutions, applying a range of technologies to address client requirements.
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2024 - Present
                </div>
                {/* JOB COMPANY */}
                
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4
                   ring-red-400 bg-white -left-2">
                   </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 "></div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 "></div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4
                   ring-red-400 bg-white -left-2">
                   </div>
                   <div className="absolute bottom-0 w-5 h-5 rounded-full ring-4
                   ring-red-400 bg-white -left-2">
                   </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-white/10 backdrop-blur-lg 
         shadow-[1px_1px_5px_#BABECC,_-5px_-5px_10px_#ffffff73]  p-3 font-semibold rounded-b-lg 
                rounded-e-lg w-fit">
                  Senior React Developer
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  I spearheaded React-based application development,
                  leveraging advanced skills.{" "}
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2017 - 2023{" "}
                </div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-white  text-black text-sm font-semibold w-fit">
                  ITS
                </div>
              </div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-white/10 backdrop-blur-lg 
         shadow-[1px_1px_5px_#BABECC,_-5px_-5px_10px_#ffffff73] p-3 font-semibold rounded-b-lg rounded-s-lg">
                 Project manager{" "}
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  Deliver projects with high ROI .Lean Six Sigma.{" "}
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2005 - 2015{" "}
                </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 flex rounded bg-white   text-sm font-semibold w-fit">
                    <Image alt="" src="/amex.png" width={30} height={30} />
                  <p className="pt-1 text-black ">American Express</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>




      

  )
}

export default mobile
