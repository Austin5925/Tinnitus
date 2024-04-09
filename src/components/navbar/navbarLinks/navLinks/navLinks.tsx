'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import styles from './navLinks.module.css';

interface NavLinkItem {
  path: string;
  name: string;
}

interface NavLinkProps {
  item: NavLinkItem;
}

const NavLink: React.FC<NavLinkProps> = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
      key={item.name}
    >
      {item.name}
    </Link>
  );
};

export default NavLink;
