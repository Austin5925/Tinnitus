import React from 'react';

import { auth } from '@/lib/auth';

import Links from './navbarLinks/Links';

const Navbar = async () => {
  const session = await auth();

  return (
    <div className='flex items-center justify-between h-24 z-0'>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
