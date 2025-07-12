import React from "react";
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
