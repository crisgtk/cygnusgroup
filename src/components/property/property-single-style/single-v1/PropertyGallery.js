"use client";
import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";
import "photoswipe/dist/photoswipe.css";
//import listings from "@/data/listings";


// const images = [
//   {
//     src: "/images/region/quinchimali8.jpeg",
//     alt: "2.jpg",
//   },
//   {
//     src: "/images/region/quinchimali7.jpeg",
//     alt: "3.jpg",
//   },
//   {
//     src: "/images/region/quinchimali5.jpeg",
//     alt: "4.jpg",
//   },
//   {
//     src: "/images/region/quinchimali4.jpeg",
//     alt: "5.jpg",
//   },
// ];

const PropertyGallery = ({ id, listings, gallery }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];

  if (!data || gallery.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
     <div className="ps-v6-slider nav_none mt30">
            <Gallery>
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={{
                  prevEl: ".prev-btn",
                  nextEl: ".next-btn",
                }}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 position-relative sp-img-content"
              >
                {gallery.map((item, i) => (
                <SwiperSlide key={i}>
                  <Item
                    original={item.src}
                    thumbnail={item.src}
                    width={1206}
                    height={671}
                  >
                    {({ ref, open }) => (
                      <Image
                        width={1206}
                        height={671}
                        ref={ref}
                        onClick={open}
                        src={item.src}
                        alt={item.alt}
                        className="w-100 h-auto bdrs12 pointer"
                      />
                    )}
                  </Item>
    <button className="all-tag popup-img border-0 pe-none">
      Ver todas las fotos
    </button>
  </SwiperSlide>
))}
{gallery.map((item, i) => (
  <SwiperSlide key={i}>
    <Image
      height={510}
      width={610}
      src={item.src}
      alt={item.alt}
      className="w-100 bdrs12 cover pointer"
    />
  </SwiperSlide>
))}
              </Swiper>
            </Gallery>
    
            <div className="row">
              <div className="col-lg-5 col-md-7">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper mt20"
                >
                  {gallery.map((item, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        height={90}
                        width={83}
                        src={item.src}
                        alt={item.alt}
                        className="w-100 bdrs12 cover pointer"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
     </div>
    </>
  );
};

export default PropertyGallery;
