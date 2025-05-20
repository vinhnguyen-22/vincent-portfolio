'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type ProjectProps = {
  data: {
    img: string;
    name: string;
    desc: string;
    url: string;
  };
  index: number;
};

const Project = ({ data, index }: ProjectProps) => {
  const [show, setShow] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      className="relative w-[350px] sm:w-full h-max border border-yellow-400 rounded-lg cursor-pointer"
    >
      {/* Image Section */}
      <div
        className="relative"
        onClick={() => setShow(!show)} // Toggle overlay visibility
      >
        <Image
          src={data.img}
          alt="Project Image"
          width={400}
          height={400}
          className={`rounded-lg transition-opacity duration-300 ${
            show ? 'opacity-30' : 'opacity-100'
          }`}
        />
      </div>

      {/* Project Details Overlay */}
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-0 w-full h-full flex flex-col items-center justify-center gap-y-2 bg-white/95 p-6 rounded-lg dark:bg-zinc-700/95 transition-colors pointer-events-none"
        >
          <h2 className="text-lg font-bold tracking-wide text-gray-500 dark:text-white transition-colors">
            {data.name}
          </h2>
          <p className="text-justify text-gray-500 first-letter:pl-2 dark:text-gray-100 transition-colors">
            {data.desc}
          </p>
        </motion.div>
      )}

      {/* GitHub Button */}
      {!show && (
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-max mx-auto mt-2 mb-2 bg-red-400 text-white text-sm px-3 py-1 rounded-lg font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
        >
          View on GitHub
        </a>
      )}
    </motion.div>
  );
};

export default Project;
