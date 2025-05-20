'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

type AwardProps = {
  data: {
    img: string;
    title: string;
    institution: string;
    details: string;
    url: string;
  };
  index: number;
};

const Award = ({ data, index }: AwardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [show, setShow] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: 'spring', stiffness: 100 }}
      key={`id-${index}`}
      className="w-[600px] xl:w-[480px] sm:w-full sm:px-5 px-0 relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative flex flex-col md:flex-row md:items-center gap-4 rounded-md border border-red-300 bg-white p-4 tracking-wide text-sm dark:bg-zinc-700 transition-colors z-20"
      >
        {/* Image Section */}
        <div className="relative md:w-full w-[200px] h-[200px]">
          <Image
            src={data.img}
            alt="Award Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-start gap-y-3 text-center sm:text-left w-full">
          <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
            {data.title}
          </h1>
          <p className="text-gray-800 dark:text-gray-100">
            <span className="font-bold">Institution:</span>
            <span className="pl-2 font-light">{data.institution}</span>
          </p>
          <div className="text-gray-800 dark:text-gray-200">
            <span className="font-bold">Details:</span>
            <span className="pl-2 font-light ">
              {data.details.length > 50
                ? data.details.slice(0, 50) + '...'
                : data.details}
            </span>
          </div>
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-max mx-auto sm:mx-0 rounded-lg bg-red-400 px-3 py-1 text-white hover:bg-red-500 transition-colors"
          >
            View Certificate
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Award;
