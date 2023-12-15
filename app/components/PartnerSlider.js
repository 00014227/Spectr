import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const imageNames = [
  '_1935613671152.png', '_1935628146064.png', '_1935636335056.png',
  '_1935641240016.png', '_1936283096736.png', '_1936283353808.png', '_1936288629984.png', '_1936292210752.png', '_1971809789792.png',
  '_1971812693440.png', '_1971814959296.png', '3x9  брандмауэр6 1.png', 'логотипы1 1.png', 'Asset 122 1.png', 'image 2 (1).png', 'сертификат fcn new q 1.png', 'Vector.png', 'сертификат fcn new q1 1.png'
];

const images = imageNames.map(imageName => require(`../assets/Logos/${imageName}`));

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      rows: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            rows: 3,
            arrows: false
          },
        },
      ],
    };

    return (
      <div className="lg:px-32 px-0 ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}  className="  w-full">
              <div className="">
                <div className="lg:w-[20vw] w-[30vw]  lg:h-[18vh] h-[8vh] rounded-3xl  mt-4  bg-white border border-white  flex ">
                  <Image
                    src={image.default}
                    alt={`Image ${index + 1}`}
                    layout="responsive"
                    objectFit="contain"

                    className="m-auto max-w-[50%]  max-h-[70%] lg:max-h-[100%]"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    );
  }
}
