/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Button, Text } from "@radix-ui/themes";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Skill = () => {
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  return (
    <div className="flex flex-col lg:flex-row gap-12 justify-center mb-10" ref={skillRef}>
      
      {/* SKILL LIST AND TITLE */}
      <div className="flex flex-col flex-1">
        <motion.h1
          initial={{ x: "-300px" }}
          animate={isSkillRefInView ? { x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-bold text-2xl"
        >
          SKILLS
        </motion.h1>

        <motion.div
          initial={{ x: "-300px" }}
          animate={isSkillRefInView ? { x: 0 } : {}}
          className="flex gap-4 flex-wrap"
        >
          {[
            "JavaScript",
            "TypeScript",
            "React.js",
            "Next.js",
            "SCSS",
            "Tailwind CSS",
            "MongoDB",
            "PostgreSQL",
            "Node.js",
            "HTML",
            "Express.js",
            "MySql",
            "GraphQL",
            "Apollo",
            "Redux",
            "Framer Motion",
            "Three.js",
            "WebGL",
            "Webpack",
            "Vite",
            "Docker",
            "AWS",
            "Firebase",
            "Git",
            "Figma",
          ].map(skill => (
            <div
              key={skill}
              className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
            >
              {skill}
            </div>
          ))}
        </motion.div>
        
        {/* SKILL SCROLL SVG */}
        <motion.svg
          initial={{ opacity: 0.2, y: 0 }}
          animate={{ opacity: 1, y: "10px" }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
        >
          <path
            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
            stroke="#fff"
            strokeWidth="1"
          ></path>
          <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
          <path
            d="M15 11L12 14L9 11"
            stroke="#fff"
            strokeWidth="1"
          ></path>
        </motion.svg>

        <Button variant="classic" size="3" style={{ width: "100px",marginTop:"50px" }} asChild>
          <Link href="/portfolio" >
          Continue
          </Link>
        </Button>
      </div>

      {/* VIDEO */}
      <div className="w-full lg:w-1/2 justify-center pt-5">
      <div className="bg-white/10 backdrop-blur-lg 
         shadow-[1px_1px_5px_#BABECC,_-5px_-5px_10px_#ffffff73] rounded-lg">
     
     <video autoPlay muted loop >
          <source src="/gea.mp4" type="video/mp4" />
        </video>
     {/*  <Text size="3">
      ✔️Frontend <br/>
✔️Mobile Responsive<br/>
✔️Design UI/UX <br/>
✔️Backend server actions <br/>
✔️Database design and integration<br/>
✔️Payments Integration<br/>
✔️Autorization Roles Admin/Users(SMT,OTP,Dashboard,Orders,Product,Users)<br/>
✔️Products navigation (Search,Sort,Filter and Pagination)<br/>
✔️Customer reviews,customer questions,customer services and more.<br/>
✔️Stock control<br/>
✔️Chat Rooms.<br/>
✔️language translation and geolocation.<br/>
✔️Debuging,testing ,speed Insigth and SEO.<br/>
      </Text> */}
      </div>
     </div>
    </div>
  );
};

export default Skill;
