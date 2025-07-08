"use client";
import getUFValue from "@/server/ufVaule";
//import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const NearbySimilarProperty = ({listings}) => {

  const data = listings;
  const [uf, setUf] = useState(0);

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log("data:::", data);


  if (!listings) {
    return <div>Loading...</div>;
  }

  
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
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".featured-next__active",
          prevEl: ".featured-prev__active",
        }}
        pagination={{
          el: ".featured-pagination__active",
          clickable: true,
        }}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {listings.slice(0, 5).map((listing) => (
          <SwiperSlide key={listing.id}>
            <div className="item">
              <div className="listing-style1">
                <div className="list-thumb">
                  <Image
                    width={382}
                    height={248}
                    className="w-100 h-100 cover"
                    src={listing.image}
                    alt="listings"
                  />
                  <div className="sale-sticker-wrap">
                    {listing.forRent && (
                      <div className="list-tag rounded-0 fz12">
                        <span className="flaticon-electricity" />
                        En Arriendo
                      </div>
                    )}
                  </div>
                  <div className="list-price">
                    {listing.price}<span> CLP / </span>
                     UF&nbsp;
                      {
                                  (
                                    parseFloat(listing.price.replace(/[^0-9]/g, '')) /
                                    parseFloat(String(uf ?? '1').replace(/[^0-9.]/g, ''))
                                  ).toLocaleString('es-CL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                                }
                  </div>
                </div>
                <div className="list-content">
                  <h6 className="list-title">
                    <Link href={`/single-v1/${listing.id}`}>{listing.title}</Link>
                  </h6>
                  <p className="list-text">{listing.city}</p>
                  <div className="list-meta d-flex align-items-center">
                    <a href="#">
                      <span className="flaticon-bed" /> {listing.bed} bed
                    </a>
                    <a href="#">
                      <span className="flaticon-shower" /> {listing.bath} bath
                    </a>
                    <a href="#">
                      <span className="flaticon-expand" /> {listing.sqft} sqft
                    </a>
                  </div>
                  <hr className="mt-2 mb-2" />
                  <div className="list-meta2 d-flex justify-content-between align-items-center">
                    <span className="for-what">{data.forRent ? "Arriendo" : "Venta"}</span>
                    <div className="icons d-flex align-items-center">
                      <a href="#">
                        <span className="flaticon-fullscreen" />
                      </a>
                      <a href="#">
                        <span className="flaticon-new-tab" />
                      </a>
                      <a href="#">
                        <span className="flaticon-like" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default NearbySimilarProperty;
