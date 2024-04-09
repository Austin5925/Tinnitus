import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

const Footer = () => {
  return (
    <div className='absolute w-full flex-col text-center justify-center items-center bottom-2 text-gray-400'>
      © {new Date().getFullYear()} By{' '}
      <UnderlineLink href='https://www.google.com'>
        Ning Huang Studio
      </UnderlineLink>
    </div>
  );
};

export default Footer;
