import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Stefan Momić | Profesionalni Terapeut",
  description: "Profesionalna terapija za lični razvoj i unapređenje komunikacije. Razumeti sebe, pronaći balans.",
  openGraph: {
    type: 'website',
    url: 'https://www.stefanmomic.com/',
    title: 'Stefan Momić | Profesionalni Terapeut',
    description: 'Profesionalna terapija za lični razvoj i unapređenje komunikacije.',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Stefan Momić Terapeut',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sr" className={`${poppins.variable} scroll-smooth`}>
      <body className="bg-white dark:bg-gray-900">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
