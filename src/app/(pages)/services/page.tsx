'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';

interface Service {
  title: string;
  description: string;
  details: string[];
  duration: string;
  price: string;
  benefits: string[];
  forWhom: string[];
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
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.15] dark:opacity-[0.05]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-gray-900" />
          </div>
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Usluge
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                Otkrijte kako vam mogu pomoći kroz različite terapijske pristupe i programe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-4">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <p>⏱ {service.duration}</p>
                        <p>💰 {service.price}</p>
                      </div>
                      <button
                        onClick={() => setSelectedService(service)}
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
                      >
                        Saznaj više
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Details Modal */}
        <Dialog
          open={selectedService !== null}
          onClose={() => setSelectedService(null)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-2xl w-full rounded-xl bg-white dark:bg-gray-900 p-6">
              {selectedService && (
                <>
                  <Dialog.Title className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedService.title}
                  </Dialog.Title>
                  
                  <div className="space-y-6 text-gray-600 dark:text-gray-300">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Šta uključuje
                      </h3>
                      <ul className="list-disc list-inside space-y-1">
                        {selectedService.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Benefiti
                      </h3>
                      <ul className="list-disc list-inside space-y-1">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Za koga je namenjeno
                      </h3>
                      <ul className="list-disc list-inside space-y-1">
                        {selectedService.forWhom.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <p>⏱ {selectedService.duration}</p>
                      <p>💰 {selectedService.price}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end space-x-4">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors duration-300"
                    >
                      Zatvori
                    </button>
                    <a
                      href="/contact"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
                    >
                      Zakaži sesiju
                    </a>
                  </div>
                </>
              )}
            </Dialog.Panel>
          </div>
        </Dialog>
      </main>
      <Footer />
    </>
  );
} 