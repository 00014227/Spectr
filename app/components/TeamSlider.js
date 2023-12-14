import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const imageNames = [
   '_1935613671152.png', '_1935628146064.png', '_1935636335056.png',
  '_1935641240016.png', '_1936283096736.png', '_1936283353808.png', '_1936288629984.png', '_1936292210752.png', '_1971809789792.png',
  '_1971812693440.png', '_1971814959296.png'
];

const images = imageNames.map((imageName) => import(`../assets/Logos/${imageName}`));

export default class TeamSlider extends Component {
  render() {
    const settings = {

      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      rows: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
       
          },
        },
      ],
    };

    return (
      <div className="">
        <Slider {...settings}  className="slick-no-spacing">
          {images.map((DynamicImage, index) => (
            <div key={index} className="md:w-[420px] w-[119px] md:h-[740px] h-[210px] border-white border mt-3">
              ьзщпьцзщуьщз
              {/* <Image
                alt={`Image ${index + 1}`}
                width={300}
                height={150}
                className="object-center  h-full"
              /> */}
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
