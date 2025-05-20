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
          src={'/aboutme.png'}
          alt="About me img"
          width={400}
          height={400}
          className="w-[400px] lg:w-[200px] hidden md:block"
        />
        <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify dark:bg-zinc-700 transition-colors">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-200 md:hidden dark:text-zinc-700 transition-colors">
            {arrowLeftIcon}
          </span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg:text-[16px] sm:text-[14px] dark:text-gray-50">
            {aboutText}
          </p>
          <a
            href="/CV_Abdullah_al_Tamim.pdf"
            download=""
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors "
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
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
