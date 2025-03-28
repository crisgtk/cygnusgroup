"use client"

import DefaultHeader from "@/components/common/DefaultHeader";

import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Header from "@/components/home/home-v5/Header";

import ProperteyFiltering from "@/components/listing/grid-view/grid-full-3-col/ProperteyFiltering";
import { getListings } from "@/transform/propertiesTransform";

import React, { useEffect, useState } from "react";

// export const metadata = {
//   title: "Gird Full 3 Column || Homez - Real Estate NextJS Template",
// };

const GridFull3Col = () => {

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
    }, [getListings]);

  

  return (
    <>
      {/* Main Header Nav */}
      <Header />
      <br/>
      <br/>
      <br/>
      <br/>
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Breadcumb Sections */}
      <section className="breadcumb-section bgc-f7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title">Selección de propiedades</h2>
                <div className="breadcumb-list">
                  <a href="#">Venta</a>
                  <a href="#">Arriendo</a>
                </div>
                <a
                  className="filter-btn-left mobile-filter-btn d-block d-lg-none"
                  data-bs-toggle="offcanvas"
                  href="#listingSidebarFilter"
                  role="button"
                  aria-controls="listingSidebarFilter">
                  <span className="flaticon-settings" /> Filtro
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcumb Sections */}

      {/* Property Filtering */}
      <ProperteyFiltering listings={listings}/>
      {/* Property Filtering */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default GridFull3Col;
