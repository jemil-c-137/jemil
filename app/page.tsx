'use client'

import React, { useEffect, useRef } from 'react';

const Home: React.FC = () => {
  const emojiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-emoji');
          } else {
            entry.target.classList.remove('animate-emoji');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (emojiRef.current) {
      observer.observe(emojiRef.current);
    }

    return () => {
      if (emojiRef.current) {
        observer.unobserve(emojiRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#1e1e1e] text-gray-800 dark:text-[#cccccc] font-mono">
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-6xl font-bold mb-4">Jemil Suleimanov</h1>
        <p className="text-2xl mb-8">Frontend Developer</p>
        <div className="space-y-2">
          <p className="cursor-pointer hover:text-blue-500">
            viewWork = () =&gt; &#123; /* View my projects */ &#125;
          </p>
          <p className="cursor-pointer hover:text-blue-500">
            contactMe = () =&gt; &#123; /* Get in touch */ &#125;
          </p>
        </div>
      </div>
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
        <div ref={emojiRef} className="
          text-9xl sm:text-[12rem] md:text-[16rem] lg:text-[20rem]
          transition-all duration-300
          relative
          opacity-0
        ">
          <div className="
            absolute inset-0
            bg-gradient-to-br from-blue-300 to-purple-300 dark:from-blue-600 dark:to-purple-600
            opacity-50 blur-2xl
            transform scale-110
            z-0
          "></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
