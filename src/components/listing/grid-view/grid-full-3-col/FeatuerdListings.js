"use client";

import getUFValue from "@/server/ufVaule";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FeaturedListings = ({ data, colstyle }) => {
  const [uf, setUf] = useState(0);

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
      {data.map((listing) => (
        <div
          className={` ${
            colstyle ? "col-sm-12 col-lg-6" : "col-sm-6 col-lg-4"
          }  `}
          key={listing.id}>
          <div
            className={
              colstyle
                ? "listing-style1 listCustom listing-type"
                : "listing-style1"
            }>
            <div className="list-thumb">
              <Image
                width={382}
                height={248}
                className="w-100  cover"
                style={{ height: "230px" }}
                src={listing.image}
                alt="listings"
              />
              <div className="sale-sticker-wrap">
                {!listing.forRent && (
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    En Venta
                  </div>
                )}
              </div>

              <div className="list-price">
                <lu>
                  <li>{listing.price} / <span>CLP</span></li>
                  <li>
                    UF&nbsp;
                               {
                                  (
                                    parseFloat(listing.price.replace(/[^0-9]/g, '')) /
                                    parseFloat(String(uf ?? '1').replace(/[^0-9.]/g, ''))
                                  ).toLocaleString('es-CL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                                }
                  </li>
                </lu>
              </div>
            </div>
            <div className="list-content">
              <h6 className="list-title">
                <Link href={`/single-v1/${listing.id}`}>{listing.title}</Link>
              </h6>
              <p className="list-text">{listing.city}</p>
              <div className="list-meta d-flex align-items-center">
                <a href="#">
                  <span className="flaticon-bed" /> {listing.bed} Piezas
                </a>
                <a href="#">
                  <span className="flaticon-shower" /> {listing.bath} Baños
                </a>
                <a href="#">
                  <span className="flaticon-expand" /> {listing.sqft} Mts2
                </a>
              </div>
              <hr className="mt-2 mb-2" />
              <div className="list-meta2 d-flex justify-content-between align-items-center">
                <span className="for-what">Disponible</span>
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
      ))}
    </>
  );
};

export default FeaturedListings;
