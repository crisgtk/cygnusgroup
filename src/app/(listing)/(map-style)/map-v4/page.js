"use client";

import DefaultHeader from "@/components/common/DefaultHeader";

import MobileMenu from "@/components/common/mobile-menu";

import PropertyFilteringMapFive from "@/components/listing/map-style/map-v4/PropertyFilteringMapFive";
import { getListings } from "@/transform/propertiesTransform";

import React, { useEffect, useState } from "react";

// export const metadata = {
//   title: "Map V4 || Homez - Real Estate NextJS Template",
// };

const MapV4 = () => {

  const [listings, setListings] = useState([]);


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

  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}
      <PropertyFilteringMapFive listings={listings}/>

   
      {/* Property Filtering */}
    </>
  );
};

export default MapV4;
