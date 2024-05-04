'use client';

import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

import styles from './Links.module.css';

import { handleLogout } from '@/lib/action';

import NavLink from '@/components/navbar/navbarLinks/navLinks/navLinks';

const links = [
  {
    name: 'Tinnitus',
    path: '/',
  },
  {
    name: 'Category',
    path: '/category',
  },
  {
    name: 'Archives',
    path: '/archives',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'About',
    path: '/about',
  },
];

interface LinksProps {
  session?: {
    user?: {
      id: string;
      isAdmin: boolean;
    };
  };
}

const Links: React.FC<LinksProps> = ({ session }) => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  // const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.name} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ name: 'Admin', path: '/admin' }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ name: 'Login', path: '/login' }} />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src='/svg/menu.png'
        alt=''
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.name} />
          ))}
        </div>
      )}
    </div>
  );
};

//   return (
//     <div className={styles.container}>
//       <div className={styles.links}>
//         {links.map((link) => (
//           <NavLink item={link} key={link.name} />
//         ))}
//         {session?.user ? (
//           <>
//             {session.user?.isAdmin && (
//               <NavLink item={{ name: 'Admin', path: '/admin' }} />
//             )}
//             {/* <form action={handleLogout}>
//               <button className={styles.logout}>Logout</button>
//             </form> */}
//           </>
//         ) : (
//           <NavLink item={{ name: 'Login', path: '/login' }} />
//         )}
//       </div>
//       <Image
//         className={styles.menuButton}
//         src='/menu.png'
//         alt=''
//         width={30}
//         height={30}
//         onClick={() => setOpen((prev) => !prev)}
//       />
//       {open && (
//         <div className={styles.mobileLinks}>
//           {links.map((link) => (
//             <NavLink item={link} key={link.name} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

export default Links;
