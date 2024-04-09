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
    <div className='flex gap-24 relative inset-0 bg-[url("/images/IndexBgSrc.png")] bg-cover bg-center'>
      {/* 这里转换为 tailwind 略有问题，到时候再研究 */}
      <Head>
        <title>Tinnitus</title>
      </Head>
      <div className='relative h-screen shadow-lg p-8 w-full'>
        <div className='z-10 p-4'>
          {/* <div className='flex text-2xl justify-start items-start text-white w-full'>
            <NavigationItem name='Tinnitus' />
            <NavigationItem name='Category' />
            <NavigationItem name='Archives' />
            <NavigationItem name='Contact' />
            <NavigationItem name='About' />
            <div className='flex-grow'></div>
          </div> */}
          <div className='relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            {/* <Logo className='w-16' /> */}

            <h1 className='mt-4'>Tinnitus</h1>
            {/* <p className='mt-2 text-sm text-gray-800'>123 </p> */}

            {/* <div className='relative h-screen'>
              <div className='absolute top-0 left-0 z-0 -mt-10 w-full h-full'>
                <Image
                />
              </div>
            </div> */}

            <div className='absolute top-[50%] left-[50%] transform -translate-x-[25%] -translate-y-[30%] -mt-10 w-full h-full'>
              <Image
                src='/favicon/TinnitusBigIcon2.png'
                alt='描述'
                width={500}
                height={300}
              />
            </div>
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
