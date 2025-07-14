"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";
import { getSliderItemsTransform } from "@/transform/propertiesTransform";
import getUFValue from "@/server/ufVaule";

const Hero = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [sliderItems, setSliderItems] = useState([]);
  const [uf, setUf] = useState(0);

  const sliderItemsTwo = [
    {
      image: "/images/slider/banner.png",
      price: "",
      title: "",
      description: "",
    },
    {
      image: "/images/slider/banner_3.png",
      price: "",
      title: "",
      description: "",
    },
    {
      image: "/images/slider/banner_4.png",
      price: "",
      title: "",
      description:
        "",
    },
    // {
    //   image: "/images/proyect/cerezos_quinchimali.png",
    //   price: "$19.900.000",
    //   title: "20 minutos de Chillán",
    //   description: "40 minutos de Concepcion",
    // },
  ];

  useEffect(() => {
    const loadSliderItems = async () => {
      try {
        const items = await getSliderItemsTransform();
        setSliderItems(items);
      } catch (error) {
        console.error("Error al cargar los items:", error);
      }
    };

    loadSliderItems();
  }, []);

    useEffect(() => {
      const fetchUFValue = async () => {
        try {
          const dailyUfValue = await getUFValue();
          setUf(dailyUfValue);
          console.log("Valor UF del día:", dailyUfValue);
        } catch (error) {
          console.error("Error fetching UF value:", error);
        }
      };
      fetchUFValue();
    }, []);

  return (
    <>
      <div className="hero-large-home5">
        <Swiper
          direction="horizontal" // Set the direction to vertical
          spaceBetween={0}
          slidesPerView={1}
          speed={1400} // Set the slide transition speed in milliseconds
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          modules={[Thumbs, Autoplay]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          style={{ height: "600px" }}>
          {sliderItemsTwo.map((item, index) => (
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
                        {/* <ul>
                          <li className="slider-price">
                            {item.price}
                            </li>
                              <li>
                              UF&nbsp; 

                               {
                                  (
                                    parseFloat(item.price.replace(/[^0-9]/g, '')) /
                                    parseFloat(String(uf ?? '1').replace(/[^0-9.]/g, ''))
                                  ).toLocaleString('es-CL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                                }
                            </li>
                          </ul> */}
                        </h4>
                        <h3 className="h6 slider-title text-white">
                          {item.title}
                        </h3>
                        <p className="mb30 slider-text text-white">
                          {item.description}
                        </p>
                        {/* <div className="slider-btn-block">
                          <Link
                            href={`/single-v1/${item.id}`}
                            className="ud-btn btn-white slider-btn">
                            Ir a ver detalles
                            <i className="fal fa-arrow-right-long" />
                          </Link>
                        </div> */}
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
          slidesPerView={sliderItemsTwo.length} // Display all thumbs at once
          spaceBetween={0} // Adjust the space between thumbs
          style={{ height: "268px" }} // Set a fixed height for the thumbs gallery
        >
          {sliderItemsTwo.map((item, index) => (
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
