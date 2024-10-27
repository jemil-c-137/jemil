"use client";

import React from 'react';
import Image from 'next/image';
import hiking from '../../public/images/hiking.jpeg';

const MountainEmojis = () => (
  <>
    {/* Left side mountains */}
    <span className="absolute -left-8 top-1/4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 text-7xl transform translate-x-[40%] group-hover:translate-x-[-100%] z-0">
      🗻
    </span>
    <span className="absolute -left-4 top-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 text-6xl transform translate-x-[40%] group-hover:translate-x-[-100%] z-0">
      ⛰️
    </span>
    <span className="absolute -left-6 bottom-1/4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 text-8xl transform translate-x-[40%] group-hover:translate-x-[-100%] z-0">
      🏔️
    </span>

    {/* Right side mountains */}
    <span className="absolute -right-8 top-1/3 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150 text-8xl transform translate-x-[-40%] group-hover:translate-x-[100%] z-0">
      🗻
    </span>
    <span className="absolute -right-4 top-2/3 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-250 text-6xl transform translate-x-[-40%] group-hover:translate-x-[100%] z-0">
      ⛰️
    </span>

    {/* Top mountains */}
    <span className="absolute top-0 left-1/4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 text-7xl transform translate-y-[40%] group-hover:-translate-y-full z-0">
      🏔️
    </span>
    <span className="absolute -top-4 right-1/4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 text-8xl transform translate-y-[40%] group-hover:-translate-y-full z-0">
      🗻
    </span>
  </>
);

const About: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 pb-4">
          About Me
        </h1>
        
        <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          Hello! 👋 I&apos;m <span className="font-semibold synthwave:text-blue-100 text-blue-600 dark:text-blue-400">Jemil Suleimanov</span>, 
          a passionate Frontend Developer with over 4 years of experience in crafting dynamic and efficient web applications across 
          various industries. I believe in creating clean, accessible, and maintainable code, driven by a commitment to continuous learning 
          and technical curiosity. Let’s build something cool together!
        </p>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 synthwave:bg-gradient-to-r synthwave:from-purple-50 synthwave:to-purple-300 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Professional Journey</h2>
            
            <div className="space-y-6">
              {/* Neuffer */}
              <div className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400 group">
                <div className="absolute w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full -left-[9px] top-1 group-hover:scale-125 transition-transform duration-300"></div>
                <div className="relative p-4 rounded-lg transition-all duration-300 bg-gradient-to-r hover:from-blue-50 dark:hover:from-blue-900/20 group-hover:translate-x-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Neuffer Fenster + Türen GmbH
                    <span className="text-sm font-normal text-gray-600 dark:text-gray-400 ml-2">
                      07/2022 - Present
                    </span>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    • Developed and maintained leading online shops across Europe using Vue and TypeScript<br />
                    • Improved Web Core Vitals by 25% and performance by migrating from jQuery and Twig to Vue and TypeScript<br />
                    • Increased code reliability by implementing unit tests with Jest and Vitest
                  </p>
                </div>
              </div>

              {/* Ramotion */}
              <div className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400 group">
                <div className="absolute w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full -left-[9px] top-1 group-hover:scale-125 transition-transform duration-300"></div>
                <div className="relative p-4 rounded-lg transition-all duration-300 bg-gradient-to-r hover:from-blue-50 dark:hover:from-blue-900/20 group-hover:translate-x-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Ramotion
                    <span className="text-sm font-normal text-gray-600 dark:text-gray-400 ml-2">
                      06/2021 - 07/2022
                    </span>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    • Developed a web app (React, TypeScript) with the data science team for an AI-driven EV charging startup<br />
                    • Crafted SEO-optimized marketing websites using JAMStack (Gatsby.js, Next.js, GraphQL, Headless CMS)<br />
                    • Achieved 90+ SEO scores and high performance using SSG/SSR
                  </p>
                </div>
              </div>

              {/* Only Studio */}
              <div className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400 group">
                <div className="absolute w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full -left-[9px] top-1 group-hover:scale-125 transition-transform duration-300"></div>
                <div className="relative p-4 rounded-lg transition-all duration-300 bg-gradient-to-r hover:from-blue-50 dark:hover:from-blue-900/20 group-hover:translate-x-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Only Studio
                    <span className="text-sm font-normal text-gray-600 dark:text-gray-400 ml-2">
                      08/2020 - 06/2021
                    </span>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    • Developed admin panel (React, TypeScript) to enhance management workflows for a major construction company<br />
                    • Developed a TypeScript web app for a business control and accounting system, supporting 3.5 million companies<br />
                    • Implemented document management and reporting features
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 synthwave:bg-gradient-to-r synthwave:from-purple-50 synthwave:to-purple-300  rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Beyond Coding</h2>
            
            <div className="space-y-6">
              <div className="group">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  <span className="mr-2">🏔️</span>
                  Adventure & Exploration
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  I&apos;m an avid hiker with a particular passion for the Alps, which I consider Europe&apos;s crown jewel for outdoor adventures. 
                  The majestic peaks and challenging trails not only provide physical exercise but also serve as a perfect escape from the digital world. 
                  When not in the mountains, I love exploring new cities, immersing myself in different cultures and discovering hidden local gems.
                </p>
              </div>

              <div className="group">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  <span className="mr-2">📚</span>
                  Lifelong Learning
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  I consider myself a lifelong learner, constantly seeking to broaden my horizons through various means. 
                  Popular science books are my gateway to understanding complex topics in digestible ways. 
                  This curiosity-driven approach to learning extends beyond technology, encompassing diverse subjects 
                  that help me maintain a well-rounded perspective on both work and life.
                </p>
              </div>

              <div className="group">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  <span className="mr-2">🎬</span>
                  Cinema Enthusiast
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Despite the busy schedule of a developer&apos;s life, I maintain my passion for cinema. 
                  While finding time for movies has become more challenging, I appreciate how films offer 
                  unique perspectives and storytelling that can inspire creativity in unexpected ways.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
          <div className="relative w-full h-[300px] md:w-[500px] md:h-[300px] group overflow-visible">
            <div className="relative w-full h-full z-10"> {/* Added wrapper with z-index */}
              <Image
                src={hiking}
                alt="Hiking Adventure"
                fill
                className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <p className="absolute bottom-4 left-4 text-white font-medium">Exploring Nature&apos;s Beauty</p>
              </div>
            </div>
            <MountainEmojis />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
