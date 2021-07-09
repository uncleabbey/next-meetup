import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <Link passHref href="/">
        <h3>React MeetUp</h3>
      </Link>
      <nav>
        <li>
          <Link href="/">All Meetups</Link>
        </li>
        <li>
          <Link href="/new-meetup">Add Meetup</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
