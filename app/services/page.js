"use client"
import Image from "next/image";
import NavBar from "../components/NavBar";
import Desktop from "../components/serviceResponsive/Desktop";
import Mobile from "../components/serviceResponsive/Mobile";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

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
    <div className="w-full lg:h-screen h-full bg-black pb-14">
      <NavBar />

      {isDesktop ? <Desktop /> : <Mobile />}

      <Footer/>
    </div>
  );
}
