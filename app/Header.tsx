import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="flex w-screen">
      <div className="flex justify-between w-full px-8 py-4">
        <ul className="flex space-x-4 items-center text-lg fixed">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
