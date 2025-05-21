'use client';

import {
  aboutData,
  aboutText,
  arrowLeftIcon,
  downloadIcon,
} from '@/assets/index.js';
import Image from 'next/image';
import Achievements from './sub/Achievement';
import Heading from './sub/Heading';

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <Heading text={'About Me'} />

      <div className="w-full flex items-center justify-between md:justify-center">
        <Image
          src="/aboutme.png"
          alt="About Image"
          width={400}
          height={400}
          className="w-[300px] lg:w-[300px] lg:block hidden h-auto"
        />
        <div className="bg-zinc-100 relative p-5 text-justify rounded-xl max-w-[800px] dark:bg-zinc-700 transition-colors">
          <span className="absolute -left-7 top-20 scale-[5] text-zinc-100 hidden lg:block dark:text-zinc-700 transition-colors">
            {arrowLeftIcon}
          </span>
          <p className="text-xs dark:text-white leading-8 font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px]">
            {aboutText}
          </p>
          <a
            href="/nick-cv.pdf"
            download
            className="w-max font-light hover:bg-red-500 transition-colors text-white flex items-center gap-x-2 rounded-full border-gray-300 bg-red-400 px-3 py-2 mt-6"
          >
            <span>Download CV</span>
            <span>{downloadIcon}</span>
          </a>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map((item, i) => (
          <Achievements key={i} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievements>
        ))}
      </div>
    </div>
  );
};

export default About;
