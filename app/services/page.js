"use client"
import NavBar from "../components/NavBar";
import Desktop from "../components/serviceResponsive/Desktop";
import Mobile from "../components/serviceResponsive/Mobile";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Head from "next/head";



export default function Services() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check the window size and set the state accordingly
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>Услуги | Спектр Маркетинг Агентства</title>
        <meta name="description" content="Ознакомьтесь с нашими услугами по маркетингу. Мы предлагаем широкий спектр услуг, чтобы помочь вашему бизнесу расти." />
        <meta name="keywords" content="Маркетинг, Услуги, Спектр, Агентство, Реклама, Продвижение, Веб разработка" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-full lg:h-screen h-full bg-black ">

        <NavBar />

        {isDesktop ? <Desktop /> : <Mobile />}

        <Footer />
      </div>
    </>
  );
}
