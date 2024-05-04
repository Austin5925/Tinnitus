'use client';

import Head from 'next/head';
// import type { NextPage } from 'next';
import Image from 'next/image';
import * as React from 'react';
import '@/lib/env';

import styles from './home.module.css';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const scrollToContent = () => {
    const section = document.querySelector('.recent-content-section');
    if (section) {
      // ts null 检查
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* className='flex gap-24 relative inset-0 bg-[url("/images/IndexBgSrc.png")] bg-cover bg-center' */}
      {/* 这里转换为 tailwind 略有问题，到时候再研究*/}

      {/* ISSUE#01：关于背景图片 */}

      <Head>
        <title>Tinnitus</title>
      </Head>
      <div className='relative m-0 w-full z-0 h-screen'>
        <div className='px-4'>
          <div className='relative flex flex-col items-center justify-center text-center'>
            {/* <Logo className='w-16' /> */}
            {/* <p className='mt-2 text-sm text-gray-800'>123 </p> */}

            {/* <div className='relative h-screen'>
              <div className='absolute top-0 left-0 z-0 -mt-10 w-full h-full'>
                <Image
                />
              </div>
            </div> */}
            <Image
              src='/favicon/TinnitusBigIcon2.png'
              alt='Tinnitus Logo'
              width={750}
              height={450}
              className='mt-12 mr-80'
            />
            <p className={styles.graytext}>
              耳鸣 Tinnitus Acouphène Szumy uszne طنين 耳鸣 Tinnitus Acouphène
              Szumy uszne طنين Tinnitus Acouphène Szumy uszne طنين 耳鸣 Tinnitus
              Acouphène Szumy uszne طنين 耳鸣 Acouphène Szumy uszne طنين 耳鸣
              Tinnitus Acouphène Szumy uszne طنين 耳鸣 Tinnitus Szumy uszne طنين
              耳鸣 Tinnitus Acouphène Szumy uszne طنين 耳鸣 Tinnitus Acouphène
              耳鸣 Tinnitus Acouphène Szumy uszne طنين 耳鸣 Tinnitus Acouphène
              Szumy uszne طنين Tinnitus Acouphène Szumy uszne طنين 耳鸣 Tinnitus
              Acouphène Szumy uszne طنين 耳鸣 Acouphène Szumy uszne طنين 耳鸣
              Tinnitus Acouphène Szumy uszne طنين 耳鸣 Tinnitus Szumy uszne طنين
              耳鸣 Tinnitus Acouphène Szumy uszne طنين 耳鸣 Tinnitus Acouphène
              耳鸣 Tinnitus Acouphène Szumy uszne طنين 耳鸣 Tinnitus Acouphène
              Szumy uszne طنين Tinnitus Acouphène Szumy uszne طنين 耳鸣 Tinnitus
              Acouphène Szumy uszne طنين 耳鸣 Acouphène Szumy uszne طنين 耳鸣
              Tinnitus Acouphène Szumy uszne طنين 耳鸣 Tinnitus Szumy uszne طنين
              耳鸣 Tinnitus Acouphène Szumy uszne طنين 耳鸣 Tinnitus Acouphène
              耳鸣 Tinnitus Acouphène Szumy uszne طنين 耳鸣 Tinnitus Acouphène
              Szumy uszne طنين Tinnitus Acouphène Szumy uszne طنين 耳鸣 Tinnitus
              Acouphène Szumy uszne طنين 耳鸣 Acouphène Szumy uszne طنين 耳鸣
              Tinnitus Acouphène Szumy uszne طنين 耳鸣 Tinnitus Szumy uszne طنين
              耳鸣 Tinnitus Acouphène Szumy uszne طنين 耳鸣 Tinnitus Acouphène
            </p>
            <div className={styles.ningquote}>
              Lorem ipsum dolor sit amet consectetur. Egestas tortor semper elit
              dolor vitae ultricies pharetra in. Volutpat elit posuere eget non
              lobortis mauris eget et pellentesque.
              <p className='text-right'>--Ning(2024)</p>
            </div>
            <div className='flex items-center space-x-4 transform translate-x-20 translate-y-72 md:translate-x-64 md:translate-y-72 lg:translate-x-96 lg:translate-y-72'>
              <a
                href='https://www.google.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/svg/instagram.svg'
                  alt='Instagram'
                  width={40}
                  height={40}
                />
              </a>
              <a
                href='https://www.google.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/svg/twitter.svg'
                  alt='Twitter'
                  width={40}
                  height={40}
                />
              </a>
              <a
                href='https://www.google.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Image
                  src='/svg/facebook.svg'
                  alt='Facebook'
                  width={40}
                  height={40}
                />
              </a>
            </div>
            <div className='arrow-down'>
              <div onClick={scrollToContent}>
                <Image
                  src='/svg/arrowdown.svg'
                  alt='Arrow Down'
                  width={120}
                  height={120}
                  className='transform translate-y-48'
                />
              </div>
              <div className='text-white transform translate-y-52 text-center font-normal text-2xl'>
                Recent
              </div>
            </div>
            {/* <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
                See the repository
              </ArrowLink>
            </p> */}

            {/* <ButtonLink className='mt-6' href='/components' variant='light'>
              查看虎哥主页
            </ButtonLink> */}
          </div>
        </div>
      </div>
      <div className='recent-content-section text-white py-4 min-h-screen relative'></div>
    </div>
  );
}

// const NavigationItem: React.FC<NavigationItemProps> = ({ name }) => {
//   return (
//     <li className='mr-4'>
//       <UnderlineLink href={`/${name}`}>{name}</UnderlineLink>
//     </li>
//   );
// };

// HOME.MODULE.CSS CODE DEPRECATED
// @media (min-width: 1025px) {
//   .container {
//     /* 确保容器在宽屏幕上水平居中，并允许它根据内容自动调整宽度 */
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//   }

//   .buttons {
//     /* 如果希望按钮组在宽屏幕上也居中对齐 */
//     justify-content: center;
//   }
// }

// @media (max-width: 1024px) {
//   .container {
//     flex-direction: column;
//     text-align: center;
//   }

//   .buttons {
//     justify-content: center;
//   }
// }

// @media (max-width: 768px) {
//   .title {
//     font-size: 64px;
//   }

//   .brands {
//     width: 100%;
//   }
// }
