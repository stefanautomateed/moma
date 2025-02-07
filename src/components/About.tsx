'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Placeholder image URL until a real image is provided
const PLACEHOLDER_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDYwMCA4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNFMkU4RjAiLz4KICA8dGV4dCB4PSIzMDAiIHk9IjQwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5NEEzQjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIj5TbGlrYSB0ZXJhcGV1dGE8L3RleHQ+Cjwvc3ZnPg==';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const elements = containerRef.current.querySelectorAll<HTMLElement>('.fade-in');
    
    elements.forEach((element: HTMLElement) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div style={{ y }} className="relative mb-12 lg:mb-0">
            <div className="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                ref={imageRef}
                src={PLACEHOLDER_IMAGE}
                alt="Stefan Momić"
                width={600}
                height={800}
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                O meni
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Ja sam Stefan Momić, terapeut sa fokusom na razvoj ličnosti i poboljšanje komunikacije. 
                Moj rad se temelji na razumevanju da svaka osoba ima svoju jedinstvenu realnost.
              </p>
            </div>

            <div className="fade-in">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Terapijski pravci koje koristim:
              </h3>
              <ul className="space-y-4">
                {[
                  'Kognitivno-bihevioralna terapija (KBT)',
                  'Humanistička terapija',
                  'Egzistencijalna terapija',
                  'Narativna terapija',
                  'Neurolingvističko programiranje (NLP)',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <svg
                      className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="fade-in">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Cilj mog rada je da vam pomognem da jasno sagledate sebe, razumete svoje unutrašnje 
                procese i pronađete rešenja u skladu sa vašim vrednostima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 