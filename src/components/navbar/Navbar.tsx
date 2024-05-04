import React from 'react';

import Links from './navbarLinks/Links';

import { auth } from '@/lib/auth';

const Navbar = async () => {
  const session = await auth();

  return (
    <div className='flex items-center justify-between h-24 z-0'>
      {/* flex text-2xl justify-start items-start text-white w-full bg-black */}
      <div>
        <Links session={session} />
        {/* session={session} */}
      </div>
    </div>
  );
};

export default Navbar;
