"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  name: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    name: "Dhaan Prakalpa",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    name: "TurpleSpace",
    imgSrc: "/images/wework/avatar3.svg",
  },
  {
    name: "CiviCad",
    imgSrc: "/images/wework/avatar4.svg",
  },
  {
    name: "SYN4CK",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    name: "Bioverse Virtual and Simulation",
    imgSrc: "/images/wework/avatar3.svg",
  },
  {
    name: "Dhaan Prakalpa",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    name: "TurpleSpace",
    imgSrc: "/images/wework/avatar3.svg",
  },
  {
    name: "CiviCad",
    imgSrc: "/images/wework/avatar4.svg",
  },
  {
    name: "SYN4CK",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    name: "Bioverse Virtual and Simulation",
    imgSrc: "/images/wework/avatar3.svg",
  },
];

const startupData: DataType[] = [
  {
    name: "Dhaan Prakalpa",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    name: "TurpleSpace",
    imgSrc: "/images/wework/avatar3.svg",
  },
  {
    name: "CiviCad",
    imgSrc: "/images/wework/avatar4.svg",
  },
  {
    name: "SYN4CK",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    name: "Bioverse Virtual and Simulation",
    imgSrc: "/images/wework/avatar3.svg",
  },
  {
    name: "Dhaan Prakalpa",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    name: "TurpleSpace",
    imgSrc: "/images/wework/avatar3.svg",
  },
  {
    name: "CiviCad",
    imgSrc: "/images/wework/avatar4.svg",
  },
  {
    name: "SYN4CK",
    imgSrc: "/images/wework/avatar.svg",
  },
  {
    name: "Bioverse Virtual and Simulation",
    imgSrc: "/images/wework/avatar3.svg",
  },
];

// CAROUSEL SETTINGS

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      // centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 1000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <>
        <div className="bg-wework py-32">
          <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 ">
            <div className="text-center">
              <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
                Our Current Startups.
              </h3>
              {/* <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">We work in several verticals.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">We work in several verticals.</h3> */}
            </div>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl">
                  <div className="relative">
                    <Image
                      src={items.imgSrc}
                      alt="gaby"
                      width={182}
                      height={182}
                      className="inline-block m-auto"
                    />
                    {/* <Image
                      src={"/images/wework/linkedin.svg"}
                      alt="greenbg"
                      width={120}
                      height={120}
                      className=" absolute inline-block position-linkedin"
                    /> */}
                  </div>
                  <h3 className="text-m font-bold pt-14">{items.name}</h3>
                  {/* <h3 className="text-2xl font-normal pt-4 pb-2 opacity-50">
                    {items.profession}
                  </h3> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="bg-wework py-32">
          <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 ">
            <div className="text-center">
              <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
                Our Partners.
              </h3>
              {/* <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">We work in several verticals.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">We work in several verticals.</h3> */}
            </div>
          </div>

          <Slider {...settings}>
            {startupData.map((items, i) => (
              <div key={i}>
                <div className="bg-white m-3 py-14 my-10 text-center shadow-xl rounded-3xl">
                  <div className="relative">
                    <Image
                      src={items.imgSrc}
                      alt="gaby"
                      width={182}
                      height={182}
                      className="inline-block m-auto"
                    />
                    {/* <Image
                      src={"/images/wework/linkedin.svg"}
                      alt="greenbg"
                      width={120}
                      height={120}
                      className=" absolute inline-block position-linkedin"
                    /> */}
                  </div>
                  <h3 className="text-m font-bold pt-14">{items.name}</h3>
                  {/* <h3 className="text-2xl font-normal pt-4 pb-2 opacity-50">
                    {items.profession}
                  </h3> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </>
    );
  }
}
