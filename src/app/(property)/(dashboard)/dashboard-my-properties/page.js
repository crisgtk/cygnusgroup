"use client";

import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import Pagination from "@/components/property/Pagination";
import Footer from "@/components/property/dashboard/Footer";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";
import FilterHeader from "../../../../components/property/dashboard/dashboard-my-properties/FilterHeader";
import PropertyDataTable from "@/components/property/dashboard/dashboard-my-properties/PropertyDataTable";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import Header from "@/components/home/home-v5/Header";
import { useEffect, useState } from "react";
import { getListings } from "@/transform/propertiesTransform";

// export const metadata = {
//   title: "Dashboard Properties || Homez - Real Estate NextJS Template",
// };



const DashboardMyProperties = () => {

  const [listings, setListings] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem('userPreferences');
    const userPreferences = localData ? JSON.parse(localData) : null;
    const id= userPreferences.ID;
    const loadListings = async (id) => {
      try {
        const items = await getListings(id);
        setListings(items);
      } catch (error) {
        console.error("Error al cargar los items:", error);
      }
    };

    loadListings(id);
  }, []);

  console.log("listings:::", listings);

  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* dashboard_content_wrapper */}
      <div className="dashboard_content_wrapper">
        <div className="dashboard dashboard_wrapper pr30 pr0-xl">
          <SidebarDashboard />
          {/* End .dashboard__sidebar */}

          <div className="dashboard__main pl0-md">
            <div className="dashboard__content bgc-f7">
              <div className="row pb40">
                <div className="col-lg-12">
                  <DboardMobileNavigation />
                </div>
                {/* End .col-12 */}
              </div>
              {/* End .row */}

              <div className="row align-items-center pb40">
                <div className="col-xxl-3">
                  <div className="dashboard_title_area">
                    <h2>Mis propiedades</h2>
                  </div>
                </div>
                {/* <div className="col-xxl-9">
                  <FilterHeader />
                </div> */}
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-xl-12">
                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <div className="packages_table table-responsive">
                      <PropertyDataTable listings={listings}/>

                      {/* <div className="mt30">
                        <Pagination />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .dashboard__content */}

            <Footer />
          </div>
          {/* End .dashboard__main */}
        </div>
      </div>
      {/* dashboard_content_wrapper */}
    </>
  );
};

export default DashboardMyProperties;
