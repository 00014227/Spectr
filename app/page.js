"use client"
import Image from 'next/image'
import Logo from './assets/Group.png'
import Logo1 from './assets/Group1.png'
import AnimatedText from './components/AnimatedText'
import NavBar from './components/NavBar'
import Video from './assets/Frame.png'
import Line1 from './assets/Line1.png'
import Line2 from './assets/Line2.png'
import { Jost } from 'next/font/google'

import PartnerSlider from './components/PartnerSlider'
import Responsive from './components/PartnerSlider'

import Group94 from './assets/Group94.png'

import AnimatedDivs from './components/AnimatedDivs '
import Link from 'next/link'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => { 
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth < 1224);
    }; 

    handleResize(); // Initial check on component mount

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className=' bg-black h-screen w-full'>
      <NavBar />
      <section className=' flex justify-between mt-20'>
        <div className='mt-8 sm:mt-16 md:mt-32 lg:mt-48 xl:mt-72'>
          <h1 className='text-white pl-4 sm:pl-8 md:pl-12 lg:pl-24 xl:pl-32 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold font'>Мы создаем</h1>

          <div className='pl-4 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-24'>
            <AnimatedText />
          </div>

       
        </div>

        <div>
          <div className="relative w-full max-w-[600px] mx-auto">
            <Image
              src={Logo}
              className="max-w-full h-auto"
              alt="Picture of the author"
            />

            <Image
              src={Logo1}
              className="absolute  right-0  max-w-[50%] h-auto mt-[-90px]"
              alt="Picture of the author"
            />
          </div>



        </div>

      </section>

      <section className='w-full'>
        <div className='bg-black flex justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32 pb-8 sm:pb-16 md:pb-24 lg:pb-32 xl:pb-48'>
          <div className='w-full max-w-screen-[1680px] mx-auto relative'>
            <Image src={Video} className="mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-32" alt="Picture of the author" />
          </div>
        </div>
      </section>

      <section className='w-full'>
        <div className='flex flex-col items-center sm:pl-4 md:pl-8 lg:pl-12 xl:pl-28 bg-black pb-10 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-36 pt-8 sm:pt-12 md:pt-16 lg:pt-24 xl:pt-28 space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-24 xl:space-y-28'>
          <div className='max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
            <div className='border-b border-white mb-6'>
              <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold pb-3 sm:pb-4 md:pb-5">Инфо про агенство</h2>
            </div>
            <p className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal leading-normal sm:leading-relaxed md:leading-loose lg:leading-loose xl:leading-loose'>
            &quot;Spectr&quot; - это инновационная маркетинговая компания, специализирующаяся на создании и реализации уникальных стратегий для продвижения брендов и продуктов. Наша компания предлагает комплексные решения для увеличения видимости и успешности бизнеса на рынке. Мы работаем с клиентами из различных отраслей, помогая им достичь своих целей и увеличить конверсию. Наши услуги включают в себя исследования рынка, разработку маркетинговых стратегий, создание контент-планов, управление рекламными кампаниями, аналитику и многое другое.
            </p>

            <Link href={"../about"} className='flex items-center max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full py-4 sm:py-5 md:py-6 lg:py-8 xl:py-10 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 border border-white rounded-xl mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16'>
              <p className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium'>Узнать больше</p>
              <Image className='my-auto ml-4 sm:ml-6' src={Line1} alt="Spectr Partners" />
            </Link>
          </div>
        </div>
      </section>

      <section className=" bg-black pb-48 w-full">


        <AnimatedDivs />





      </section>







      <section className=' bg-black pb-48 w-full'>
        <div className=' mx-auto'>
          <h2 className='text-white text-4xl sm:text-5xl md:text-6xl pl-24 lg:text-7xl xl:text-7xl font-bold pb-3 sm:pb-4 md:pb-5"'>Нам доверяют</h2>
          <Responsive />
        </div>
      </section>

      <section className='bg-black lg:h-screen'>
        <div className="bg-[url('./assets/Rectangle15.png')] bg-no-repeat bg-cover h-full flex flex-col items-center justify-center pb-48">
          <h1 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center pt-16 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-48'>
            We will provide an incredible<br /> user experience that will<br /> parasitize you.
          </h1>

          <h3 className='text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-center mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16'>
            Ready to elevate your digital strategy?
          </h3>

          {/* <button className='flex items-center max-w-[345px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl w-full py-4 sm:py-5 md:py-6 lg:py-8 xl:py-10 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 border border-white rounded-xl mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16'>
            <p className='text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium'>Смотреть</p>
            <Image className='my-auto ml-4 sm:ml-6' src={Line1} alt='aef' />
          </button> */}
        </div>
      </section>




      <section className="pt-6 md:pb-10 pb-5 dark:text-white bg-black w-full">
        <div className='relative w-auto max-w-[1636px] flex flex-row my-auto ml-auto'>
          <form className="container lg:w-[30vw] max-w-[686px] h-auto max-h-[771px] lg:ml-40 ml-0 p-8 space-y-6 rounded-md shadow bg-[#282828] md:absolute md:left-38 md:top-16">
            <h2 className=" text-3xl font-bold leading text-white">Contact us</h2>
            {/* ... (rest of the form content) */}
            <div>
              <label htmlFor="name" className="block mb-1 ml-1 text-white">Ваше имя </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                required
                className="block w-full max-w-[526px] max-h-[80px] bg-zinc-300 rounded-[20px] p-2 focus:outline-none focus:ring focus:border-violet-400 dark:bg-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 ml-1 text-white">Номер телефона</label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                required
                className="block w-full max-w-[526px] max-h-[80px] bg-zinc-300 rounded-[20px] p-2 focus:outline-none focus:ring focus:border-violet-400 dark:bg-gray-800"
              />
            </div>
 
            <label htmlFor="message" className="block mb-1 ml-1 text-white">Каков ваш бюджет?</label>
            <div className="flex items-center mb-4">
              <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-white dark:text-gray-300">$500-1000</label>
            </div>

            <div className="flex items-center">
              <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-white dark:text-gray-300">$1500-3000</label>


            </div>

            <div className="flex items-center mb-4">
              <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-medium text-white dark:text-gray-300">$3000-более</label>
            </div>


            <div>
              <label htmlFor="message" className="block mb-1 ml-1 text-white">Сообщение</label>
              <textarea
                id="message"
                placeholder="Message..."
                className="w-full max-w-[526px] h-auto max-h-[227px] bg-zinc-300 rounded-[20px]  block p-2 autoexpand focus:outline-none focus:ring focus:border-violet-400 dark:bg-gray-800"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full max-w-[526px] max-h-[80px] px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:border-violet-400 border-1 border-white text-white dark:text-gray-900 dark:bg-violet-400"
              >
                Send
              </button>
            </div>
          </form>

          {isLargeScreen ? (
        // Content to show on large screens
      null
      ) : (
        // Content to show on small screens
        <div className={`w-[70%] py-[400px] px-[180px] max-h-[880px] h-[auto] rounded-tl-[30px] rounded-bl-[30px] ml-auto border-2 border-white my-auto items-center justify-center z-1`}>
          <Image src={Group94} className="" alt='ooooo' />
        </div>
      )}
           
        </div>
      </section>




    <Footer/>

    </div>
  )
}
