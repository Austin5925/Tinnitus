'use client';

import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import AboutMember from '@/components/aboutMember/aboutMember';

interface Member {
  name: string;
  bio: string;
  twitterID: string;
  img?: string;
}

const teamMembers: Member[] = [
  {
    name: 'Ning Huang',
    bio: 'CEO of Ning Huang Studio',
    twitterID: '1',
  },
  {
    name: 'Xiang Shi',
    bio: 'UI/UX designer who loves crafting beautiful interfaces',
    twitterID: '2',
  },
  {
    name: 'Ausdin Zhou',
    bio: 'Web3 Buidler, Crypto Nomad',
    twitterID: 'Ausdin5925',
  },
];

const AboutPage = () => {
  const scrollToContent = () => {
    const section = document.querySelector('.team-members-section');
    if (section) {
      // ts null 检查
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <div className='relative min-h-screen flex flex-row justify-center items-center text-white'>
        <div className='flex flex-col justify-center items-center text-center space-y-4'>
          <Image
            src='/path/to/your/image.png'
            alt='Description Image'
            width={500}
            height={300}
          />
          <p className='text-lg max-w-md'>
            Tinnitus 介绍文字 Lorem ipsum dolor sit amet...
          </p>
        </div>
      </div>

      <div className='arrow-down flex justify-center items-center'>
        <div onClick={scrollToContent} className='cursor-pointer'>
          <Image
            src='/svg/arrowdown.svg'
            alt='Arrow Down'
            width={120}
            height={120}
            className='transform -translate-y-48'
          />
        </div>
      </div>

      <div className='text-white h-screen flex flex-col justify-center team-members-section'>
        <h1 className='text-3xl text-center mb-6'>Team Members</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10'>
          {teamMembers.map((member) => (
            <AboutMember key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
