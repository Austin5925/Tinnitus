import { Metadata } from 'next';
import * as React from 'react';
import { lazy, Suspense } from 'react';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';

import Footer from '@/components/footer/Footer';

// import Navbar from '@/components/navbar/Navbar';
import { siteConfig } from '@/constant/config';

const Navbar = lazy(() => import('@/components/navbar/Navbar'));
// 动态导入 Navbar 组件

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
  // authors: [
  //   {
  //     name: 'Theodorus Clarence',
  //     url: 'https://theodorusclarence.com',
  //   },
  // ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html>
        <body className='relative inset-0 bg-[url("/images/IndexBgSrc.png")] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen shadow-lg w-full h-full'>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
          </Suspense>
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}

// !STARTERCONF 异步加载 Navbar

// import React, { Suspense } from 'react';

// export default function RootLayout({ children }) {
//   return (
//     <>
//       <html>
//         <body className='relative inset-0 bg-[url("/images/IndexBgSrc.png")] bg-cover bg-center bg-no-repeat min-h-screen shadow-lg w-full'>
//           <Suspense fallback={<div>Loading...</div>}>
//             <Navbar />
//           </Suspense>
//           {children}
//           <Footer />
//         </body>
//       </html>
//     </>
//   );
// }
