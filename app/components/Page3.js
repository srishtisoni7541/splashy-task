

"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectCard = ({ img, title }) => {
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div ref={wrapperRef} className="flex flex-col">
      <motion.div
        style={{ scale }}
        className="w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-lg group"
      >
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </motion.div>
      <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-[#333]">{title}</h2>
    </div>
  );
};

const Page3 = () => {
  const projects = [
    {
      img: "https://framerusercontent.com/images/H2Ct1jcYSqFTTkYh2wkO5C5FGk.jpeg?scale-down-to=1024",
      title: "Brand Identity Design",
    },
    {
      img: "https://framerusercontent.com/images/EbLAFisNfpGqXz5JKvJzjvyOTSk.jpeg?scale-down-to=1024",
      title: "E-commerce UI/UX",
    },
    {
      img: "https://framerusercontent.com/images/ED65XKvBcWdKVOg38ctW8LmPanQ.jpeg?scale-down-to=1024",
      title: "Portfolio Website",
    },
    {
      img: "https://framerusercontent.com/images/3jOIecfpJiE5cG03dOa0b1URtes.jpeg?scale-down-to=1024",
      title: "Product Landing Page",
    },
  ];

  return (
    <div className="min-h-screen w-full px-4 sm:px-10 md:px-20 lg:px-60 py-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-[#792822] text-center sm:text-left">
        SELECTED PROJECTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
        {projects.map((project, index) => (
          <ProjectCard key={index} img={project.img} title={project.title} />
        ))}
      </div>
    </div>
  );
};

export default Page3;
