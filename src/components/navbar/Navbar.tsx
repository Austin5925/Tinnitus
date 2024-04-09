import Link from 'next/link';
import React from 'react';

import Links from './navbarLinks/Links';

// import { auth } from '@/lib/auth';

const Navbar = async () => {
  // const session = await auth();

  return (
    <div className='flex items-center justify-between h-24'>
      {/* flex text-2xl justify-start items-start text-white w-full bg-black */}
      <Link href='/' className='text-3xl font-bold'>
        Tinnitus
      </Link>
      <div>
        <Links />
        {/* session={session} */}
      </div>
    </div>
  );
};

export default Navbar;
