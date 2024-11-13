"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const sliderItems = [
    {
      image: "/images/proyect/cerezos.png",
      price: "$25.900.000",
      title: "Colliguay-Región del Ñuble",
      description: "20 minutos de Chillán, 40 minutos de Concepcion",
    },
    {
      image: "/images/proyect/los_nogales.png",
      price: "$28.900.000",
      title: "Quillón-Región del Ñuble",
      description: "30 minutos de Chillán, 40 minutos de Concepcion",
    },
    {
      image: "/images/proyect/florida.png",
      price: "$27.900.000",
      title: "Florida-Región del Bio Bio",
      description:
        "2 minutos del Hospital de Florida, 40 minutos de Concepcion",
    },
    {
      image: "/images/proyect/cerezos_quinchimali.png",
      price: "$19.900.000",
      title: "20 minutos de Chillán",
      description: "40 minutos de Concepcion",
    },
  ];

  return (
    <>
      <div className="hero-large-home5">
        <Swiper
          direction="horizontal" // Set the direction to vertical
          spaceBetween={0}
          slidesPerView={1}
          speed={1400} // Set the slide transition speed in milliseconds
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Thumbs, Autoplay]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          style={{ height: "750px" }}>
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <div
                  className="slider-slide-item"
                  style={{ backgroundImage: `url(${item.image})` }}
                  data-thumb={item.image}>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-left position-relative">
                        <h4 className="h1 slider-subtitle text-white">
                          {item.price}
                        </h4>
                        <h3 className="h6 slider-title text-white">
                          {item.title}
                        </h3>
                        <p className="mb30 slider-text text-white">
                          {item.description}
                        </p>
                        <div className="slider-btn-block">
                          <Link
                            href="/single-v1/1"
                            className="ud-btn btn-white slider-btn">
                            Ir a ver detalles
                            <i className="fal fa-arrow-right-long" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="custom_thumbs">
        <Swiper
          direction="vertical" // Set the direction to vertical
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          slidesPerView={sliderItems.length} // Display all thumbs at once
          spaceBetween={0} // Adjust the space between thumbs
          style={{ height: "268px" }} // Set a fixed height for the thumbs gallery
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                width={50}
                height={50}
                className="cover"
                src={item.image}
                alt="thumb"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
