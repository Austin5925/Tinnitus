'use client';

import Head from 'next/head';
// import type { NextPage } from 'next';
import Image from 'next/image';
import * as React from 'react';
import '@/lib/env';

import ButtonLink from '@/components/links/ButtonLink';

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
  return (
    <div>
      {/* className='flex gap-24 relative inset-0 bg-[url("/images/IndexBgSrc.png")] bg-cover bg-center' */}
      {/* 这里转换为 tailwind 略有问题，到时候再研究*/}

      {/* ISSUE#01：关于背景图片 */}

      <Head>
        <title>Tinnitus</title>
      </Head>
      <div className='relative m-0 w-full z-0'>
        <div className='px-4'>
          {/* <div className='flex text-2xl justify-start items-start text-white w-full'>
            <NavigationItem name='Tinnitus' />
            <NavigationItem name='Category' />
            <NavigationItem name='Archives' />
            <NavigationItem name='Contact' />
            <NavigationItem name='About' />
            <div className='flex-grow'></div>
          </div> */}
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
              alt='描述'
              width={500}
              height={300}
            />
            <h1 className='mt-4'>Tinnitus</h1>
            {/* <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
                See the repository
              </ArrowLink>
            </p> */}

            <ButtonLink className='mt-6' href='/components' variant='light'>
              查看虎哥主页
            </ButtonLink>
          </div>
        </div>
      </div>
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
