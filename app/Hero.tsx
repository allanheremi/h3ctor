import React from 'react';

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <div className="p-8 pt-12 flex justify-start items-center lg:justify-center">
        <div className="flex flex-col">
          {/* <img
            src="/h3ctorbg.jpeg"
            alt="image"
            className="max-h-[50vh] rounded-lg object-cover md:object-contain"
          /> */}
<img src="/koda5.jpeg" alt="Mutant ape yacht club 7826" className='w-[4rem] rounded-full slide-in-element'/>
          <h1 className="text-center py-4 text-2xl font-mono bg-white bg-gradient-to-tr-custom-gradient bg-clip-text text-transparent">
            Hello, I'm h3ctor.eth
          </h1>

          <h2 className="flex max-w-[100%] font-mono bg-[#e1e1e1] bg-clip-text text-transparent2s">
            Web3 native with experience of community management and developing
            brands. <br /> <br />
          </h2>
          <div className="flex flex-col">
            <ul className="list-none">
              <li className='font-mono bg-white bg-clip-text text-transparent2s'>
                Moderator{' '}
                <a href="https://www.novellabs.xyz/mutantcartel">
                  @ Mutant cartel
                </a>
              </li>
              <li className='font-mono bg-white bg-clip-text text-transparent2s'>
                Crew <a href='https://twitter.com/boredkitchen_'>@ Bored kitchen</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
