import Contact from './Contact';
import Hero from './Hero';

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="box">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index}>
              <img
                src="/koda1.png"
                alt=""
                className="rounded-full object-cover opacity-20"
              />
            </div>
          ))}
        </div>
      </div>
      <Hero />
      <Contact />
    </>
  );
}
