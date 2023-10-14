import React from 'react';

type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <ul className="flex justify-center gap-8">
        <li className='hover:translate-y-[-8%] duration-500'>
          <a href="https://opensea.io/h3ctorvault" target="_blank">
            <img
              src="/opensea.png"
              alt="opensea"
              className="w-[4rem] clip text-transparent3s cursor-pointer "
            />
          </a>
        </li>

        <li className='hover:translate-y-[-8%] duration-500'>
          <a href="https://www.instagram.com/h3ctor.eth/" target='_blank'>
            <img
              src="/insta.png"
              alt="instagram"
              className="w-[4rem] rounded-full text-transparent3s cursor-pointer bg-black"
            />{' '}
          </a>
        </li>

        <li className='hover:translate-y-[-8%] duration-500'>
          <a href="https://twitter.com/h3ctor_eth" target="_blank">
            <img
              src="/twitter.png"
              alt="twitter"
              className="w-[4rem] clip text-transparent3s cursor-pointer"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
