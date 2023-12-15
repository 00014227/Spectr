"use client"
import Image from "next/image";
import NavBar from "../components/NavBar";
import Spectr from "../assets/about/Spectragency.png";
import { useEffect, useState } from "react";
import TeamSlider from "../components/TeamSlider";
import NewSlider from "../components/NewSlider";
import Footer from "../components/Footer";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a delay for the text to appear after a certain duration
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Adjust the delay as needed

    // Clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full bg-black h-screen">
      <NavBar />

      <section className="mt-20 pt-20 flex items-center justify-center">
        <div className={`mx-auto flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-8`}>
          <Image
            src={Spectr}
            className={`md:w-[526px] w-[150px] md:h-[526px] h-[150px] ${isVisible ? 'moveLeft' : ''}`}
            alt="Spectr"
          />
          <h1 className={`text-white text-2xl md:text-4xl lg:text-7xl font-extrabold uppercase tracking-[9.71px] text-center md:text-left ${isVisible ? 'appear' : 'hidden'}`}>
            Spectr <br />Marketing<br />agency
          </h1>
        </div>
      </section>

      <section className="w-full">
        <div className="bg-black pt-16 pb-24 lg:pt-44 lg:pb-60">
          <h3 className="text-white text-4xl lg:text-7xl font-bold w-full lg:w-[1200px] text-center mx-auto">
            &quot;Spectr&quot; - ваш надежный партнер в мире маркетинга, готовый помочь вам выделиться среди конкурентов и достичь новых высот в бизнесе.
          </h3>

        </div>
      </section>

      <section className="w-full">
        <div className="bg-black pb-24 pl-4 sm:pl-32">
          <TeamSlider />
        </div>
      </section>

      <section className="w-full">
        <div className="bg-black h-[100vh] relative">
          <h1 className="text-white pl-4 sm:pl-32 text-3xl lg:text-7xl font-bold uppercase">новости агентства</h1>
          <div className="w-full h-[70vh] mt-8 sm:mt-20 pl-4 sm:pl-32">
            <NewSlider className="absolute bottom-8 sm:bottom-32" />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
