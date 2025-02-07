'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Placeholder image URL until a real image is provided
const PLACEHOLDER_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDYwMCA4MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiNFMkU4RjAiLz4KICA8dGV4dCB4PSIzMDAiIHk9IjQwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5NEEzQjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIj5TbGlrYSB0ZXJhcGV1dGE8L3RleHQ+Cjwvc3ZnPg==';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.15] dark:opacity-[0.05]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900" />
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                O meni
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Upoznajte moj pristup terapiji i saznajte više o mom profesionalnom putu.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={PLACEHOLDER_IMAGE}
                    alt="Stefan Momić"
                    width={600}
                    height={800}
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Moja priča
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Kao terapeut sa dugogodišnjim iskustvom, posvetio sam se razumevanju ljudske psihe 
                    i pomaganju drugima da pronađu svoj put ka ličnom razvoju i unutrašnjem miru.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Obrazovanje i iskustvo
                  </h3>
                  <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                    <li>• Diplomirani psiholog, Filozofski fakultet u Beogradu</li>
                    <li>• Sertifikovani KBT terapeut</li>
                    <li>• NLP praktičar</li>
                    <li>• Više od 1000 sati individualnog rada sa klijentima</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Moj pristup
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Verujem u individualni pristup svakom klijentu, jer svaka osoba ima jedinstvenu 
                    priču i potrebe. Kroz kombinaciju različitih terapijskih tehnika, zajedno radimo 
                    na postizanju vaših ciljeva i stvaranju pozitivnih promena u vašem životu.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Oblasti rada
                  </h3>
                  <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                    <li>• Lični razvoj i samopoznavanje</li>
                    <li>• Prevazilaženje anksioznosti i stresa</li>
                    <li>• Poboljšanje komunikacije i odnosa</li>
                    <li>• Rad na samopouzdanju</li>
                    <li>• Upravljanje emocijama</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 