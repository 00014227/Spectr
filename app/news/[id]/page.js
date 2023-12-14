"use client";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import Image from "next/image";
import { useParams } from "next/navigation";
// import Img from '../../assets/news/Rectangle69.png'
import newsData from '../../datas/news.json'

export default function News() {
    const params = useParams();


    const newsItem = newsData.news.find((item) => item.id === parseInt(params.id));

    const image = require(`../../assets/news/${newsItem.image}`)
    if (!newsItem) {
        // Handle case when news item is not found
        return <div>News not found</div>;
    }
    return (
        <div className="w-full bg-black">
            <NavBar />

            <div className="mt-20 justify-center items-center pb-12 pt-6">
                <div className="text-center">
                    <h1 className="text-white md:text-4xl text-2xl font-medium">{newsItem.title}</h1>
                    <p className="text-white md:text-xl text-sm font-normal mx-auto max-w-[1100px]">
                    {newsItem.content}
                    </p>
                </div>

                <div className="flex pl-4 md:pl-32 pt-8   lg:pr-28 pr-0">
                    <div className="py-6 px-4 absolute mt-14 z-10 lg:w-[30vw] w-[190px]  bg-neutral-800 rounded-[10px]">
                        <h3 className="text-white md:text-3xl text-lg font-medium">{newsItem.title}</h3>
                        <p className="text-white md:text-xl text-xs mt-2 font-normal">{newsItem.shortContent}</p>
                    </div>

                    <div className="flex lg:w-[70%] w-[80%] lg:h-[70vh]  h-[296px]  flex-col ml-auto  rounded-[10px] overflow-hidden relative">
                        <Image
                            className="w-full h-full object-cover"
                            width={200}
                            height={300}
                            src={image}
                            alt="Your Image Alt Text"
                        />
                    </div>
                </div>

            </div>
            <Footer/>
        </div>

    )
}