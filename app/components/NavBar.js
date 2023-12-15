"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../assets/Group 3931.png'
import Burger from '../assets/Group 4015.png'
import Close from '../assets/close.png'

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setNavbar(window.innerWidth > 1000);
    };

    // Set initial state on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (


    <nav className="w-full bg-black fixed top-0 left-0 right-0 my-auto z-50">
      <div className="justify-between px-4   lg:items-center lg:flex lg:px-8">
        <div>
          <div className="flex items-center justify-between lg:block">
            {/* LOGO */}
            <Link href="/">
              <Image src={Logo} alt="Logo" />
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src={Close} width={30} height={30} alt="logo" />

                ) : (
                  <Image
                    src={Burger}
                    width={30}
                    height={30}
                    alt="logo"
                    className="focus:border-none active:border-none"
                  />

                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            // ion visibility
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? 'block' : 'hidden'}`}
          >
            <ul className="h-screen lg:h-auto justify-center  items-center   lg:flex ">

              <li className="pb-6 text-xl text-white py-2 lg:px-6 text-center border-b-2 lg:border-b-0  hover:bg-purple-900  border-purple-900  lg:hover:text-purple-600 lg:hover:bg-transparent">
                <Link href="/" >
                  Главная
                </Link>
              </li>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 lg:border-b-0  hover:bg-purple-600  border-purple-900  lg:hover:text-purple-600 lg:hover:bg-transparent">
                <Link href="../about" >
                  О нас
                </Link>
              </li>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 lg:border-b-0  hover:bg-purple-600  border-purple-900  lg:hover:text-purple-600 lg:hover:bg-transparent">
                <Link href="../services" >
                  Услуги
                </Link>
              </li>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 lg:border-b-0  hover:bg-purple-600  border-purple-900  lg:hover:text-purple-600 lg:hover:bg-transparent">
                <Link href="#projects" >
                  Кейсы
                </Link>
              </li>

              <div className={`flex justify-center mt-4 ${navbar ? 'hidden' : 'visible'} lg:hidden`}>
                <button className="text-white bg-blue-400 w-40 h-14 rounded-3xl">Let&apos;s talk</button>

              </div>



            </ul>


          </div>

        </div>
      

      </div>
    </nav>

  );
}

export default NavBar;