"use client";
import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";
import { useMemo, useState } from "react";

import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";

const option = {
  zoomControl: true,
  disableDefaultUI: true,
  styles: [
    // ...existing styles...
  ],
  scrollwheel: true,
};
const containerStyle = {
  width: "100%",
  height: "100%",
};
export default function ListingMap1({data}) {

  const dataListing = data;

  if (!dataListing) {
    return <div>Loading...</div>;
  }

  const [getLocation, setLocation] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAEK60BvwAdEzMbBKbelBIWD8D8YgLi7Q8",
  });
  const center = useMemo(
    () => ({ lat: -36.60664, lng: -72.10344 }),
    []
  );

  // add long & lat
  const locationHandler = (location) => {
    setLocation(location);
  };

  // close handler
  const closeCardHandler = () => {
    setLocation(null);
  };

  return (
    <>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}
          options={option}
        >
          <MarkerClusterer>
            {(clusterer) =>
              dataListing.map((marker) => (
                <Marker
                  key={marker.id}
                  position={{
                    lat: marker.lat,
                    lng: marker.long,
                  }}
                  clusterer={clusterer}
                  onClick={() => locationHandler(marker)}
                ></Marker>
              ))
            }
          </MarkerClusterer>
          {getLocation !== null && (
            <InfoWindow
              position={{
                lat: getLocation.lat,
                lng: getLocation.long,
              }}
              onCloseClick={closeCardHandler}
            >
              <div>
                <div className="listing-style1">
                  <div className="list-thumb">
                    <Image
                      width={382}
                      height={248}
                      className="w-100 h-100 cover"
                      src={getLocation.image}
                      alt="dataListing"
                    />
                    <div className="sale-sticker-wrap">
                      {!getLocation.forRent && (
                        <div className="list-tag fz12">
                          <span className="flaticon-electricity me-2" />
                          En Venta
                        </div>
                      )}
                    </div>

                    <div className="list-price">
                      {getLocation.price} / <span>mo</span>
                    </div>
                  </div>
                  <div className="list-content">
                    <h6 className="list-title">
                      <Link href={`/single-v1/${getLocation.id}`}>
                        {getLocation.title}
                      </Link>
                    </h6>
                    <p className="list-text">{getLocation.location}</p>
                    <div className="list-meta d-flex align-items-center">
                      <a href="#">
                        <span className="flaticon-bed" /> {getLocation.bed} bed
                      </a>
                      <a href="#">
                        <span className="flaticon-shower" /> {getLocation.bath}{" "}
                        bath
                      </a>
                      <a href="#">
                        <span className="flaticon-expand" /> {getLocation.sqft}{" "}
                        sqft
                      </a>
                    </div>
                    <hr className="mt-2 mb-2" />
                    <div className="list-meta2 d-flex justify-content-between align-items-center">
                      <span className="for-what"></span>
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
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </>
  );
}
