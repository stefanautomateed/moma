'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface Service {
  title: string;
  description: string;
  details: string[];
  duration: string;
  price: string;
  benefits: string[];
  forWhom: string[];
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

const services: Service[] = [
  {
    title: 'Individualne sesije',
    description: 'Personalizovani pristup vašem ličnom razvoju',
    details: [
      'Dubinska analiza trenutne situacije',
      'Identifikacija ciljeva i izazova',
      'Razvoj strategija za prevazilaženje prepreka',
      'Praćenje napretka i prilagođavanje pristupa',
    ],
    duration: '50 minuta',
    price: 'Cena na upit',
    benefits: [
      'Bolje razumevanje sebe',
      'Razvoj efikasnih strategija suočavanja',
      'Poboljšanje kvaliteta života',
      'Dugoročne pozitivne promene',
    ],
    forWhom: [
      'Osobe koje žele da rade na ličnom razvoju',
      'Ljudi koji se suočavaju sa životnim izazovima',
      'Oni koji žele da poboljšaju svoje odnose',
      'Pojedinci koji traže profesionalnu podršku',
    ],
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Online terapija',
    description: 'Fleksibilna podrška iz udobnosti vašeg doma',
    details: [
      'Video sesije preko sigurne platforme',
      'Ista pažnja i kvalitet kao uživo sesije',
      'Fleksibilno zakazivanje',
      'Tehnička podrška po potrebi',
    ],
    duration: '50 minuta',
    price: 'Cena na upit',
    benefits: [
      'Ušteda vremena na putovanju',
      'Pristup terapiji iz bilo kog mesta',
      'Veća fleksibilnost u zakazivanju',
      'Jednaka efikasnost kao uživo sesije',
    ],
    forWhom: [
      'Zaposleni sa ograničenim vremenom',
      'Osobe koje preferiraju rad od kuće',
      'Ljudi koji često putuju',
      'Oni koji žive van Beograda',
    ],
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Terapijski paketi',
    description: 'Intenzivniji rad za dublje promene',
    details: [
      'Paket od 6 sesija',
      'Strukturiran pristup ciljevima',
      'Redovno praćenje napretka',
      'Dodatna podrška između sesija',
    ],
    duration: '6 x 50 minuta',
    price: 'Cena na upit',
    benefits: [
      'Ekonomičnija opcija',
      'Kontinuitet u radu',
      'Dublje promene',
      'Bolje praćenje napretka',
    ],
    forWhom: [
      'Osobe posvećene dugoročnoj promeni',
      'Oni koji žele strukturiran pristup',
      'Ljudi koji rade na kompleksnim izazovima',
      'Pojedinci koji cene kontinuitet',
    ],
    icon: (props) => (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "Koliko traje jedna terapijska sesija?",
    answer: "Standardna terapijska sesija traje 50 minuta. Prva konsultacija može trajati do 60 minuta kako bismo detaljno razgovarali o vašim potrebama i ciljevima."
  },
  {
    question: "Da li je online terapija jednako efikasna kao uživo?",
    answer: "Da, istraživanja pokazuju da je online terapija jednako efikasna kao tradicionalna terapija uživo. Ključna je posvećenost procesu i otvorena komunikacija."
  },
  {
    question: "Koliko često treba da dolazim na terapiju?",
    answer: "Učestalost sesija se prilagođava individualnim potrebama. Najčešće se preporučuje jedna sesija nedeljno, posebno u početnoj fazi rada."
  },
  {
    question: "Kako znam da li mi je potrebna terapija?",
    answer: "Ako osećate da vas određeni problemi opterećuju, ako imate poteškoće u odnosima ili želite da radite na ličnom razvoju, terapija može biti korisna. Prva konsultacija će vam pomoći da bolje razumete da li je terapija pravi izbor za vas."
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Usluge
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Pružam različite vrste terapijskih usluga prilagođene vašim potrebama i ciljevima.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-800/50 rounded-2xl transform transition-transform group-hover:scale-[0.98]" />
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform group-hover:scale-[1.02]">
                <div className="p-8">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg p-2.5 mb-6">
                    <service.icon className="w-full h-full text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <p>⏱ {service.duration}</p>
                    <p>💰 {service.price}</p>
                  </div>
                  <motion.button
                    onClick={() => setSelectedService(service)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Saznaj više
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Često postavljana pitanja
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Details Modal */}
        <Dialog
          open={selectedService !== null}
          onClose={() => setSelectedService(null)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-2xl w-full rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl">
              {selectedService && (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg p-2.5 flex-shrink-0">
                      <selectedService.icon className="w-full h-full text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <Dialog.Title className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedService.title}
                      </Dialog.Title>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        {selectedService.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6 text-gray-600 dark:text-gray-300">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Šta uključuje
                      </h3>
                      <ul className="space-y-2">
                        {selectedService.details.map((detail, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Benefiti
                      </h3>
                      <ul className="space-y-2">
                        {selectedService.benefits.map((benefit, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            {benefit}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Za koga je namenjeno
                      </h3>
                      <ul className="space-y-2">
                        {selectedService.forWhom.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.6 }}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p>⏱ {selectedService.duration}</p>
                      <p>💰 {selectedService.price}</p>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 mt-8">
                    <motion.button
                      onClick={() => setSelectedService(null)}
                      className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Zatvori
                    </motion.button>
                    <motion.a
                      href="/contact"
                      className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Zakaži sesiju
                    </motion.a>
                  </div>
                </div>
              )}
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </section>
  );
} 