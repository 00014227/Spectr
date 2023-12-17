import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import newsData from "../datas/news.json";
import Link from "next/link";


export default class NewSlider extends Component {
    render() {
        const settings = {
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            rows: 1,
            responsive: [
                {
                    breakpoint: 1228,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    },
                },
            ],
        };

        return (
            <div className="">
                <Slider {...settings} className="">
                    {newsData.news.map((newsItem) => (
                        <div key={newsItem.id} className="max-w-[526px] md:w-auto w-[353px] md:h-[360px] h-[160px] bg-zinc-800 border-white rounded-[30px] border-2 mt-3 md:p-10 p-[10px]">
                            <h2 className="text-white md:text-4xl text-[20px] font-medium">{newsItem.title}</h2>
                            <p className="text-white md:text-xl text-[12px] font-normal overflow-hidden overflow-ellipsis ">{newsItem.shortContent}</p>
                            <div className="w-[196px] h-[35px] gap-5 inline-flex">
                                <Link href={`/news/${newsItem.id}`} className="text-cyan-400 md:text-2xl text-[12px] font-medium">
                                    Подробнее...
                                </Link>
                            </div> 
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}
