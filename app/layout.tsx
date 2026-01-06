import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from '@next/third-parties/google';
import FloatingReserveButton from './components/FloatingReserveButton';
import "./globals.css";

const arizonaSerif = localFont({
  src: [
    {
      path: "../public/fonts/ABCArizonaFlare-Regular-Trial.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ABCArizonaFlare-Light-Trial.woff2",
      weight: "300",
      style: "normal",
    },
    // Adding italics if available or falling back
    {
        path: "../public/fonts/ABCArizonaFlare-Regular-Trial.woff2", // Fallback for italic if specific file missing, normally should be separate
        weight: "400",
        style: "italic",
    }
  ],
  variable: "--font-serif",
  display: "swap",
});

const arizonaSans = localFont({
  src: [
    {
      path: "../public/fonts/ABCArizonaSans-Regular-Trial.woff2",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Beforest Hospitality',
    default: 'The Blyton Bungalow | Eco-Luxury Stays in Coorg | Beforest',
  },
  description: 'Experience the wilderness at Blyton Bungalow in Poomaale Estate, Coorg. A sustainable, eco-luxury retreat by Beforest offering permaculture farm stays, forest experiences, and community living.',
  keywords: ['Beforest', 'Hospitality', 'Coorg Resorts', 'Eco Stays', 'Blyton Bungalow', 'Poomaale Estate', 'Sustainable Travel', 'Permaculture', 'Nature Retreats'],
  authors: [{ name: 'Beforest Lifestyle Solutions' }],
  creator: 'Beforest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hospitality.beforest.co/',
    title: 'The Blyton Bungalow | Live Where the Forest Breathes',
    description: 'Discover a Kodava-inspired haven where six rooms face 128 acres of living coffee estate and rain-fed wilderness.',
    siteName: 'Beforest Hospitality',
    images: [
      {
        url: 'https://ik.imagekit.io/ofgaefbk0/blyton.jpg',
        width: 1200,
        height: 630,
        alt: 'Blyton Bungalow at Poomaale Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Blyton Bungalow | Beforest Hospitality',
    description: 'Live where the forest breathes. Eco-luxury stays in the heart of Coorg.',
    images: ['https://ik.imagekit.io/ofgaefbk0/blyton.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arizonaSerif.variable} ${arizonaSans.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-M6NF9T8PGG" />
        <FloatingReserveButton />
      </body>
    </html>
  );
}