
import getUFValue from "@/server/ufVaule";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FeaturedListings = ({data,colstyle}) => {
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
        <div className={`${colstyle ? 'col-sm-12 col-lg-6':'col-sm-6'}  `} key={listing.id}>
          <div className={colstyle ? "listing-style6 listCustom listing-type" : "listing-style6"}>
            <div className="list-thumb"   >
              <Image
                width={386}
                height={334}
                className="w-100 cover"
                style={{height:'334px'}}
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

              <div className="list-meta">
                <div className="icons">
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
            </div>
            <div className="list-content">
              <div className="list-price mb-2"> UF&nbsp; {
                                  (
                                    parseFloat(listing.price.replace(/[^0-9]/g, '')) /
                                    parseFloat(String(uf ?? '1').replace(/[^0-9.]/g, ''))
                                  ).toLocaleString('es-CL', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                                }</div>
              <h6 className="list-title">
                <Link href={`/single-v1/${listing.id}`}>{listing.title}</Link>
              </h6>
              <p className="list-text">{listing.city}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
