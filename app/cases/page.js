"use client";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Img from '../assets/cases/Rectangle69.png'

export default function Cases() {
  return (
    <div className="w-full h-[100vh] bg-black">
      <NavBar />
      <div className="mt-20 bg-[#252525] h-[1080px] ">
        <div className="flex pl-32 pt-24">
          <div className=" pt-44">
            <div className="flex gap-10 h-fit">
              <div class="w-10 h-0.5 bg-zinc-300 my-auto"></div>
              <h2 className="text-white text-4xl font-bold">Lorem ipsum dolor </h2>
            </div>
          </div>
          <div className="flex flex-colw-full md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto max-w-[1205px] h-[auto] md:h-[60vh] lg:h-[50vh] xl:h-[80vh] rounded-[10px] overflow-hidden relative">
            <Image
              className="w-full h-full object-cover absolute inset-0 mix-blend-overlay"
              src={Img}
              alt="Your Image Alt Text"
            />

            <div className="flex mt-auto">
                <button className="w-[163px] h-[47px] text-center text-white rounded-[10px] border border-white">fdfsdfsdfcv</button>
                <button className="w-[163px] h-[47px] text-center text-white rounded-[10px] border border-white">fdfsdfsdfcv</button>
                <button className="w-[163px] h-[47px] text-center text-white rounded-[10px] border border-white">fdfsdfsdfcv</button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
