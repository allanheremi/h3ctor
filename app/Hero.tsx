import React from 'react';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="p-8 flex justify-center items-center">
      <div className="flex flex-col">
        <img
          src="/h3ctorbg.jpeg"
          alt="image"
          className="max-h-[50vh] max-w-[36vw] rounded-full"
        />
        <h1 className="text-center py-4 text-2xl font-mono bg-custom-gradient bg-gradient-to-tr-custom-gradient bg-clip-text text-transparent">
          Hello, I'm H3ctor 👋
        </h1>
      </div>
    </div>
  );
};

export default Hero;
