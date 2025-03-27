// import DefaultHeader from "@/components/common/DefaultHeader";
// import Footer from "@/components/common/default-footer";
// import MobileMenu from "@/components/common/mobile-menu";
// import EnergyClass from "@/components/property/property-single-style/common/EnergyClass";
// import FloorPlans from "@/components/property/property-single-style/common/FloorPlans";
// import HomeValueChart from "@/components/property/property-single-style/common/HomeValueChart";
// import InfoWithForm from "@/components/property/property-single-style/common/more-info";
// import NearbySimilarProperty from "@/components/property/property-single-style/common/NearbySimilarProperty";
// import OverView from "@/components/property/property-single-style/common/OverView";
// import PropertyAddress from "@/components/property/property-single-style/common/PropertyAddress";
// import PropertyDetails from "@/components/property/property-single-style/common/PropertyDetails";
// import PropertyFeaturesAminites from "@/components/property/property-single-style/common/PropertyFeaturesAminites";
// import PropertyHeader from "@/components/property/property-single-style/common/PropertyHeader";
// import PropertyNearby from "@/components/property/property-single-style/common/PropertyNearby";
// import PropertyVideo from "@/components/property/property-single-style/common/PropertyVideo";
// import PropertyViews from "@/components/property/property-single-style/common/property-view";
// import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
// import ReviewBoxForm from "@/components/property/property-single-style/common/ReviewBoxForm";
// import VirtualTour360 from "@/components/property/property-single-style/common/VirtualTour360";
// import AllReviews from "@/components/property/property-single-style/common/reviews";
// import ContactWithAgent from "@/components/property/property-single-style/sidebar/ContactWithAgent";
// import ScheduleTour from "@/components/property/property-single-style/sidebar/ScheduleTour";
// import PropertyGallery from "@/components/property/property-single-style/single-v1/PropertyGallery";
import React from "react";
// import MortgageCalculator from "@/components/property/property-single-style/common/MortgageCalculator";
// import WalkScore from "@/components/property/property-single-style/common/WalkScore";
// import { getListings, getListings } from "@/transform/propertiesTransform";
// import { getGalleryTransform } from "@/transform/galeryTransform";
// import Header from "@/components/home/home-v5/Header";
import SingleComponent from "./SingleComponent";


const SingleV1 = ({ params }) => {
  return (
    <>
      <SingleComponent params={params} />
    </>
  );
};

export async function generateStaticParams() {
  const blogIds = [...Array(1_000_0)].map((_, i) => i + 1); // O puedes obtener estos IDs dinámicamente desde una API o base de datos

  return blogIds.map(id => ({
    id: String(id), // Aquí usamos String(id) para asegurarnos de que sea un string
  }));
}



export default SingleV1;
