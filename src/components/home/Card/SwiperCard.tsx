"use client";


import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const SwiperCard = ({imageArray}:any) => {
  const progressCircle = useRef<SVGCircleElement | null>(null);  
  const progressContent = useRef<HTMLDivElement | null>(null);  

  const onAutoplayTimeLeft = (s: any, time: number, progress: number): void => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", (1 - progress).toString());
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className=" mb-12">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {/* Ensure a consistent number of slides */}
        {imageArray?.map((item:any, index:any) => (
          <SwiperSlide key={index}>
            <Image
              src={item.src}
              height={100}
              width={100}
              className="h-[300px] w-[400px]"
              alt="room image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCard;
