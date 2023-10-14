import Contact from './Contact';
import Hero from './Hero';

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className='box'>
          <img src="/koda1.png" alt="" className='opacity-10 max-w-[24px] max-h-[24px] rounded-full' />
          <img src="/koda2.png" alt="" className='opacity-10 max-w-[24px] max-h-[24px] rounded-full' />
          <img src="/koda3.png" alt="" className='opacity-10 max-w-[24px] max-h-[24px] rounded-full' />
          <img src="/koda4.png" alt="" className='opacity-10 max-w-[24px] max-h-[24px] rounded-full' />
          <img src="/koda5.png" alt="" className='opacity-10 max-w-[24px] max-h-[24px] rounded-full' />
          <img src="/koda6.png" alt="" className='opacity-10 max-w-[24px] max-h-[24px] rounded-full' />
          <img src="/koda1.png" alt="" className='opacity-10 max-w-[24px] max-h-[24px] rounded-full' />
          <img src="/koda2.png" alt="" className='opacity-10 max-w-[24px] max-h-[24px] rounded-full' />
          <img src="/koda3.png" alt="" className='opacity-10 max-w-[24px] max-h-[24px] rounded-full' />
          <img src="/koda4.png" alt="" className='opacity-10 max-w-[24px] max-h-[24px] rounded-full' />
        </div>
        <Hero />
        <Contact />
      </div>
    </>
  );
}
