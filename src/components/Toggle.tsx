'use client';
import { moonIcon, sunIcon } from '@/assets';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

import { ReactNode } from 'react';

const Toggle = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const mainRef = useRef<HTMLElement | null>(null);

  const addDarkTheme = () => {
    if (mainRef.current) {
      mainRef.current.classList.add('dark');
    }
    setDarkTheme(true);
  };

  const removeDarkTheme = () => {
    if (mainRef.current) {
      mainRef.current.classList.remove('dark');
    }
    setDarkTheme(false);
  };

  useEffect(() => {
    const darkTheme = reactLocalStorage.get('darkTheme');
    let darkThemeParsed = false;
    if (typeof darkTheme === 'string') {
      try {
        darkThemeParsed = JSON.parse(darkTheme);
      } catch {
        darkThemeParsed = false;
      }
    }

    const systemTheme =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (darkTheme === undefined) {
      if (systemTheme) {
        addDarkTheme();
      } else {
        removeDarkTheme();
      }
    } else {
      if (darkThemeParsed) {
        addDarkTheme();
      } else {
        removeDarkTheme();
      }
    }
    console.log(darkTheme, darkThemeParsed, systemTheme);
  }, []);

  return (
    <main ref={mainRef}>
      <div className="bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-[1200px] xl:w-full mx-auto flex justify-center xl:px-[90px] sm:pl-[80px] sm:pr-5 overflow-hidden">
          <button
            onClick={() => {
              if (!darkTheme) {
                addDarkTheme();
                reactLocalStorage.set('darkTheme', true);
              } else {
                removeDarkTheme();
                reactLocalStorage.set('darkTheme', false);
              }
            }}
            className="fixed right-14 sm:10 top-10 text-yellow-600 hover:text-yellow-500 z-40"
          >
            <motion.span
              animate={{ scale: darkTheme ? 0 : 1 }}
              className="absolute block rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800"
            >
              {moonIcon}
            </motion.span>
            <motion.span
              animate={{ scale: darkTheme ? 1 : 0 }}
              className="absolute block rounded-full bg-zinc-50 p-1 text-3xl dark:bg-zinc-800"
            >
              {sunIcon}
            </motion.span>
          </button>
          {children}
        </div>
      </div>
    </main>
  );
};

export default Toggle;
