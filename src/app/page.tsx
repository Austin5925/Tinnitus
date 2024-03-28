'use client';

import Head from 'next/head';
// import type { NextPage } from 'next';
import Image from 'next/image';
import * as React from 'react';
import '@/lib/env';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

//interface Props {}
// 定义 props 的类型
interface NavigationItemProps {
  name: string;
}

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
    <main>
      <Head>
        <title>Tinnitus</title>
      </Head>
      <section className='bg-white relative h-screen'>
        <div
          style={{
            backgroundImage: 'url("/images/IndexBgSrc.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        >
          <div className='flex text-2xl justify-start items-start text-white w-full'>
            <NavigationItem name='Tinnitus' />
            <NavigationItem name='Category' />
            <NavigationItem name='Archives' />
            <NavigationItem name='Contact' />
            <NavigationItem name='About' />
            <div className='flex-grow'></div>
          </div>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
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

          <div className='bg-black h-screen flex items-center justify-center'>
            {/* TODO */}
            <p className='text-white'>TODO</p>
          </div>

          <footer className='absolute flex-col text-center justify-center items-center bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://www.google.com'>
              Ning Huang Studio
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}

const NavigationItem: React.FC<NavigationItemProps> = ({ name }) => {
  return (
    <li className='mr-4'>
      <UnderlineLink href={`/${name}`}>{name}</UnderlineLink>
    </li>
  );
};
