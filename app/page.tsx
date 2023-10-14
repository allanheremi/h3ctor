import Contact from './Contact';
import Hero from './Hero';

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="box">
          <div>
            <img
              src="/deed1.avif"
              alt=""
              className="rounded-full object-cover aspect-square opacity-20"
            />
          </div>
          <div>
            <img
              src="/deed2.avif"
              alt=""
              className="rounded-full object-cover aspect-square opacity-20"
            />
          </div>
          <div>
            <img
              src="/mayc.avif"
              alt=""
              className="rounded-full object-cover aspect-square opacity-20"
            />
          </div>
          <div>
            <img
              src="/deed3.avif"
              alt=""
              className="rounded-full object-cover aspect-square opacity-20"
            />
          </div>
          <div>
            <img
              src="/hound1.png"
              alt=""
              className="rounded-full object-cover aspect-square opacity-20"
            />
          </div>
          <div>
            <img
              src="/koda1.png"
              alt=""
              className="rounded-full object-cover aspect-square opacity-20"
            />
          </div>
          <div>
            <img
              src="/koda2.png"
              alt=""
              className="rounded-full object-cover aspect-square opacity-20"
            />
          </div>
          <div>
            <img
              src="/koda3.png"
              alt=""
              className="rounded-full object-cover aspect-square opacity-20"
            />
          </div>
          <div>
            <img
              src="/koda4.png"
              alt=""
              className="rounded-full object-cover aspect-square opacity-20"
            />
          </div>
          <div>
            <img
              src="/cartel.jpeg"
              alt=""
              className="rounded-full object-cover aspect-square opacity-20"
            />
          </div>
        </div>
      </div>
      <Hero />
      <Contact />
    </>
  );
}
