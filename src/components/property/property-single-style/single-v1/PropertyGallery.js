"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import listings from "@/data/listings";

const images = [
  {
    src: "/images/region/quinchimali8.jpeg",
    alt: "2.jpg",
  },
  {
    src: "/images/region/quinchimali7.jpeg",
    alt: "3.jpg",
  },
  {
    src: "/images/region/quinchimali5.jpeg",
    alt: "4.jpg",
  },
  {
    src: "/images/region/quinchimali4.jpeg",
    alt: "5.jpg",
  },
];

const PropertyGallery = ({ id }) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  return (
    <>
      <Gallery>
        <div className="col-sm-6">
          <div className="sp-img-content mb15-md">
            <div className="popup-img preview-img-1 sp-img">
              <Item
                original={"/images/proyect/cerezos_quinchimali.png"}
                thumbnail={"/images/proyect/cerezos_quinchimali.png"}
                width={610}
                height={510}>
                {({ ref, open }) => (
                  <Image
                    src={"/images/proyect/cerezos_quinchimali.png"}
                    width={591}
                    height={558}
                    ref={ref}
                    onClick={open}
                    alt="image"
                    role="button"
                    className="w-100 h-100 cover"
                  />
                )}
              </Item>
            </div>
          </div>
        </div>
        {/* End .col-6 */}

        <div className="col-sm-6">
          <div className="row">
            {images.map((image, index) => (
              <div className="col-6 ps-sm-0" key={index}>
                <div className="sp-img-content">
                  <div
                    className={`popup-img preview-img-${
                      index + 2
                    } sp-img mb10`}>
                    <Item
                      original={image.src}
                      thumbnail={image.src}
                      width={1570}
                      height={850}>
                      {({ ref, open }) => (
                        <Image
                          width={1570}
                          height={850}
                          className="w-100 h-100 cover"
                          ref={ref}
                          onClick={open}
                          role="button"
                          src={image.src}
                          alt={image.alt}
                        />
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Gallery>
    </>
  );
};

export default PropertyGallery;
