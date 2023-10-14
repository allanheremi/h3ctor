import Contact from './Contact';
import Hero from './Hero';

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="box">
          <img
            src="/koda1.jpeg"
            alt=""
            className=" max-w-[24px] max-h-[24px] rounded-full "
          />
          <img
            src="/koda2.jpeg"
            alt=""
            className=" max-w-[24px] max-h-[24px] rounded-full "
          />
          <img
            src="/koda3.jpeg"
            alt=""
            className=" max-w-[24px] max-h-[24px] rounded-full "
          />
          <img
            src="/koda4.jpeg"
            alt=""
            className=" max-w-[24px] max-h-[24px] rounded-full "
          />
          <img
            src="/koda5.jpeg"
            alt=""
            className=" max-w-[24px] max-h-[24px] rounded-full "
          />
          <img
            src="/koda6.jpeg"
            alt=""
            className=" max-w-[24px] max-h-[24px] rounded-full "
          />
          <img
            src="/h3ctorbg.jpeg"
            alt=""
            className=" max-w-[24px] max-h-[24px] rounded-full "
          />
          <img
            src="/koda2.jpeg"
            alt=""
            className=" max-w-[24px] max-h-[24px] rounded-full "
          />
          <img
            src="/h3ctorbg.jpeg"
            alt=""
            className=" max-w-[24px] max-h-[24px] rounded-full "
          />
          <img
            src="/koda4.jpeg"
            alt=""
            className=" max-w-[24px] max-h-[24px] rounded-full "
          />
        </div>
        <Hero />
        <Contact />
      </div>
    </>
  );
}
