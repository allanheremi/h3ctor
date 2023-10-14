import React from 'react';

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <div>
        <ul className="flex justify-center gap-8">
          <li className="hover:translate-y-[-4%] duration-500">
            <a href="https://opensea.io/h3ctorvault" target="_blank">
              <img
                src="/opensea.png"
                alt="opensea"
                className="w-[4rem] clip text-transparent3s cursor-pointer "
              />
            </a>
          </li>

          <li className="hover:translate-y-[-4%] duration-500">
            <a href="https://www.instagram.com/h3ctor.eth/" target="_blank">
              <img
                src="/insta.png"
                alt="instagram"
                className="w-[4rem] rounded-full text-transparent3s cursor-pointer bg-black"
              />{' '}
            </a>
          </li>

          <li className="hover:translate-y-[-4%] duration-500">
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
      <div className="w-full flex justify-center text-white p-8">
        <button className="text-2xl  w-[70%] md:w-[44%] p-2 transparent4s text-white border-[1px] border-white rounded-lg hover:bg-gray-500 animation ease-in duration-300 hover:translate-y-[-3%]">
          Get in touch
        </button>
      </div>
    </>
  );
};

export default Contact;
