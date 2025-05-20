'use client';
import About from '@/components/About';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Load from '@/components/Load';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Questions from '@/components/Questions';
import Skills from '@/components/Skills';
import Toggle from '@/components/Toggle';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [id, setId] = useState('');
  const compsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            setId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (compsRef.current) {
      const compsArr = Array.from(compsRef.current.children);
      compsArr.forEach((comp) => {
        if (comp instanceof Element) {
          observer.observe(comp);
        }
      });
    }
  }, []);

  return (
    <>
      <Load />
      <Toggle>
        <Navbar id={id} />
        <div className="" ref={compsRef}>
          <Hero />
          <About />
          <Awards />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Questions />
        </div>
      </Toggle>
    </>
  );
}
