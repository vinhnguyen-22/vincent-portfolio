'use client';
import Load from '@/components/Load';
import Navbar from '@/components/Navbar';
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
      </Toggle>
    </>
  );
}
