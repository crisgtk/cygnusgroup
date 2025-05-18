
import React from "react";
import UpdatePropertyTabContent from "./UpdatePropertyTabContent";
import Header from "@/components/home/home-v5/Header";
import MobileMenu from "@/components/common/mobile-menu";


const SingleV1 = ({ params }) => {
  return (
    <>
      <Header />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <MobileMenu />

      <UpdatePropertyTabContent params={params} />
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