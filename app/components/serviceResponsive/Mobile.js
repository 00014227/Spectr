"use client";
import serviceData from '../../datas/services.json'
import Image from "next/image";

import Img from '../../assets/cases/Rectangle69.png'
import { useState } from 'react';
export default function Mobile() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="mx-auto pt-20 h-full">


            <div className=" mx-auto">
                {serviceData.services.map((option) => (
                    <div key={option.id}>
                        <div className="flex gap-10 h-fit mt-[50px]" onClick={() => handleClick(option)} style={{ cursor: 'pointer' }}>
                            <div className="w-10 h-0.5 bg-zinc-300 my-auto"></div>
                            <h2 className="text-white  text-[20px]  font-bold">{option.name}</h2>
                        </div>

                        {selectedOption && selectedOption.id === option.id && (
                            <div className="flex flex-col w-full md:w-[80%] h-[456px] lg:w-[70%] xl:w-[60%] mx-auto rounded-[10px] relative ">
                                <Image
                                    className="w-full h-[296px] object-cover "
                                    src={Img}
                                    alt="Your Image Alt Text"
                                />
                            
                                <div className="w-[50vw]  md:flex absolute right-0 lg:bottom-12 bottom-1 z-10 p-[10px] bg-neutral-800 rounded-[10px] border border-white flex-col justify-center items-start gap-5 inline-flex">
                                    <h1 className="text-white text-base font-medium ">{selectedOption.name}</h1>
                                    <p className="text-white text-[10px]font-normal overflow-hidden overflow-ellipsis">
                                        {selectedOption.description}
                                    </p>

                                </div>
                            </div>
                        )}
                    </div>
                ))}

            </div>



        </div>
    )
}