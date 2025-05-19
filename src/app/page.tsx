'use client';
import Load from '@/components/Load';
import Navbar from '@/components/Navbar';
import Toggle from '@/components/Toggle';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [id, setId] = useState<any>('0');
  const compsRef = useRef<any>(null);

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

    const compsArr = Array.from(compsRef.current.children) as Element[];
    compsArr.forEach((comp: Element) => {
      observer.observe(comp);
    });
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
