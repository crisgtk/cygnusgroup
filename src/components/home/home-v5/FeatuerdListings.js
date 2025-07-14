"use client";
import getUFValue from "@/server/ufVaule";
//import listings from "@/data/listings";
import { getListings } from "@/transform/propertiesTransform";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const FeaturedListings = () => {
  const [listings, setListings] = useState([]);
  const [uf, setUf] = useState(0);


  useEffect(() => {
    const loadListings = async () => {
      try {
        const items = await getListings();
        setListings(items);
      } catch (error) {
        console.error("Error al cargar los items:", error);
      }
    };

    loadListings();
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

      console.log("this is the listings:::", listings);

  // return (
  //   <>
  //     <Swiper
  //       spaceBetween={30}
  //       modules={[Navigation, Pagination]}
  //       navigation={{
  //         nextEl: ".featured-next__active",
  //         prevEl: ".featured-prev__active",
  //       }}
  //       pagination={{
  //         el: ".featured-pagination__active",
  //         clickable: true,
  //       }}
  //       slidesPerView={1}
  //       breakpoints={{
  //         300: {
  //           slidesPerView: 1,
  //         },
  //         768: {
  //           slidesPerView: 2,
  //         },
  //         1024: {
  //           slidesPerView: 2,
  //         },
  //         1200: {
  //           slidesPerView: 3,
  //         },
  //       }}>
  //       {listings.slice(0, 8).map((listing) => (
  //         <SwiperSlide key={listing.id}>
  //           <div className="item">
  //             <div className="listing-style7 mb60">
  //               <div className="list-thumb">
  //                 <Image
  //                   width={382}
  //                   height={248}
  //                   className="w-100 h-100 cover"
  //                   src={listing.image}
  //                   alt="listings"
  //                 />
  //                 <div className="sale-sticker-wrap">
  //                   {listing.forRent && (
  //                     <div className="list-tag rounded-0 fz12">
  //                       <span className="flaticon-electricity" />
  //                       DESTACADA
  //                     </div>
  //                   )}
  //                   <div className="list-tag2 rounded-0 fz12">DISPONIBLE</div>
  //                 </div>

  //                 <div className="list-meta">
  //                   <a href="#" className="mr5">
  //                     <span className="flaticon-fullscreen" />
  //                   </a>
  //                   <a href="#" className="mr5">
  //                     <span className="flaticon-new-tab" />
  //                   </a>
  //                   <a href="#">
  //                     <span className="flaticon-like" />
  //                   </a>
  //                 </div>
  //               </div>
  //               <div className="list-content">
  //                 <h6 className="list-title">
  //                   <Link href={`/single-v1/${listing.id}`}>
  //                     {listing.title}
  //                   </Link>
  //                 </h6>

  //                 <div className="d-flex justify-content-between align-items-center">
  //                   <div className="list-price">
  //                     {listing.price} <span>CLP / </span>
  //                     UF&nbsp;
  //                     {
  //                           (
  //                             parseFloat(listing.price.replace(/[^0-9]/g, '')) /
  //                             parseFloat(String(uf ?? '1').replace(/[^0-9.]/g, ''))
  //                           ).toLocaleString('es-CL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
  //                         } 

  //                     {/* <ul>
  //                       <li>{listing.price} / <span>CLP</span></li>
  //                       <li>
  //                         {
  //                           (
  //                             parseFloat(listing.price.replace(/[^0-9]/g, '')) /
  //                             parseFloat(String(uf ?? '1').replace(/[^0-9.]/g, ''))
  //                           ).toLocaleString('es-CL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
  //                         } UF
  //                       </li>
  //                     </ul> */}
  //                   </div>
  //                   <div className="list-meta2 d-flex align-items-center">
  //                     <a href="#" className="mr10">
  //                       <span className="flaticon-bed mr5" /> {listing.bed}
  //                     </a>
  //                     <a href="#" className="mr10">
  //                       <span className="flaticon-shower mr5" /> {listing.bath}
  //                     </a>
  //                     <a href="#">
  //                       <span className="flaticon-expand" /> {listing.sqft}
  //                     </a>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </SwiperSlide>
  //       ))}
  //     </Swiper>

  //     <div className="row align-items-center justify-content-center">
  //       <div className="col-auto">
  //         <button className="featured-prev__active swiper_button">
  //           <i className="far fa-arrow-left-long" />
  //         </button>
  //       </div>
  //       {/* End prev */}

  //       <div className="col-auto">
  //         <div className="pagination swiper--pagination featured-pagination__active" />
  //       </div>
  //       {/* End pagination */}

  //       <div className="col-auto">
  //         <button className="featured-next__active swiper_button">
  //           <i className="far fa-arrow-right-long" />
  //         </button>
  //       </div>
  //       {/* End Next */}
  //     </div>
  //     {/* End .col for navigation and pagination */}
  //   </>
  // );
  return (
    <>
      {listings.slice(0, 8).map((listing) => (
        <div className="col-sm-6 col-lg-3 col-xl-3" key={listing.id}>
          <div className="listing-style5">
            <div className="list-thumb">
              <Image
                width={382}
                height={248}
                className="w-100 h-100 cover"
                src={listing.image}
                alt="listings"
              />
              <div className="sale-sticker-wrap">
                {listing.featured && (
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    DESTACADA
                  </div>
                )}
              </div>
              <div className="list-meta2">
                <a href="#">
                  <span className="flaticon-like" />
                </a>
                <a href="#">
                  <span className="flaticon-new-tab" />
                </a>
                <a href="#">
                  <span className="flaticon-fullscreen" />
                </a>
              </div>
            </div>
            <div className="list-content">
              <div className="list-price mb-2">
                   {listing.price} <span>CLP / </span>
                      UF&nbsp;
                      {
                            (
                              parseFloat(listing.price.replace(/[^0-9]/g, '')) /
                              parseFloat(String(uf ?? '1').replace(/[^0-9.]/g, ''))
                            ).toLocaleString('es-CL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                          } 

                      {/* <ul>
                        <li>{listing.price} / <span>CLP</span></li>
                        <li>
                          {
                            (
                              parseFloat(listing.price.replace(/[^0-9]/g, '')) /
                              parseFloat(String(uf ?? '1').replace(/[^0-9.]/g, ''))
                            ).toLocaleString('es-CL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                          } UF
                        </li>
                      </ul> */}
              </div>
              <h6 className="list-title">
                <Link href={`/single-v1/${listing.id}`}>{listing.title}</Link>
              </h6>
              <p className="list-text">{listing.location}</p>
              <div className="list-meta d-flex align-items-center">
                <a href="#">
                  <span className="flaticon-bed" /> {listing.bed} Piezas
                </a>
                <a href="#">
                  <span className="flaticon-shower" /> {listing.bath} Baños
                </a>
                <a href="#">
                  <span className="flaticon-expand" /> {listing.sqft} mts'2
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
