"use client";
import serviceData from '../../datas/services.json'
import Image from "next/image";

import Img from '../../assets/cases/Rectangle69.png'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
export default function Desktop() {
    const [selectedOption, setSelectedOption] = useState(serviceData.services[0]);


    const handleClick = (option) => {
        setSelectedOption(option);
    };



    useEffect(() => {

    }, [selectedOption]);
    return (
        <div className="lg:flex block md:pl-32 pl-12 pt-24 pb-11">


            <div className=" pt-20">
                {serviceData.services.map((option) => (
                    <div className="flex gap-10 h-fit " key={option.id} onClick={() => handleClick(option)} style={{ cursor: 'pointer' }}>
                        <div className="w-10 h-0.5 bg-zinc-300 my-auto"></div>
                        <h2 className="text-white text-4xl hover:text-5xl font-bold">{option.name}</h2>
                    </div>
                ))}

            </div>
            <div className="flex flex-col w-full md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto max-w-[1205px] h-auto md:h-[70%] lg:h-[50vh] xl:h-[80vh] rounded-[10px] overflow-hidden relative">
                <Image
                    className="w-full h-full object-cover "
                    src={Img}
                    alt="Your Image Alt Text"
                />

                <div className="w-[40vw] md:flex absolute right-0 bottom-0 h-auto z-10 px-10 py-5 bg-neutral-800 rounded-[10px] border border-white flex-col justify-center items-start gap-5 inline-flex">
                    <h1 className="text-white text-4xl font-bold">{selectedOption.name}</h1>
                    <p className="text-white text-xl font-normal overflow-hidden overflow-ellipsis">
                        {selectedOption.description}
                    </p>
                    <div className="flex gap-4">
                        {selectedOption.categories.map((category) => (
                            <button
                                key={category}
                                className="w-[163px] h-[47px] rounded-[10px] border border-white text-white"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

