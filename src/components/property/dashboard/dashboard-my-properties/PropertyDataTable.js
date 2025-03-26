"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateStatusProperty } from "@/server/properties";

const propertyData = [
  {
    id: 1,
    title: "Florida III",
    imageSrc: "/images/listings/list-1.jpg",
    location: "Florida - Región del Bio Bio",
    price: "$27.900.000/CLP",
    datePublished: "31/03/2023",
    status: "Punblicado",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Pendiente":
      return "pending-style style1";
    case "Publicada":
      return "pending-style style2";
    case "Procesando":
      return "pending-style style3";
    default:
      return "";
  }
};

const PropertyDataTable = ({listings}) => {

  const dataListings = listings;

  console.log("dataListings:::", dataListings);

  if (!dataListings) {
    return <div>Loading...</div>;
  }


  const serverDelete = async (propertyId) => {
    try {
      const items = await updateStatusProperty(propertyId, 1);
      if (items ===0)
        {
          toast.success("Propiedad eliminada con éxito");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          toast.error("Error al eliminar la propiedad");
        }
    } catch (error) {
      console.error("Error al cargar los items:", error);
    }
    
  };

  const handleDelete = (propertyId, name ) => {
    const ConfirmDelete = ({ closeToast }) => (
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '18px' }}>¿Realmente quiere eliminar la  propiedad {name}?</p>
        <button
          style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px' }}
          onClick={() => {
            serverDelete(propertyId);
            closeToast();
          }}
        >
          Aceptar
        </button>
        <button
          style={{ padding: '10px 20px', fontSize: '16px' }}
          onClick={closeToast}
        >
          Cancelar
        </button>
      </div>
    );

    toast.warn(<ConfirmDelete />, {
      position: "top-center",
      autoClose: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
    });
  };


  return (
    <>
    <ToastContainer className="custom-toast-container"/>
    <table className="table-style3 table at-savesearch">
      <thead className="t-head">
        <tr>
          <th scope="col">Título</th>
          <th scope="col">Fecha de publicación</th>
          <th scope="col">Estado</th>
          <th scope="col">Tipo</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody className="t-body">
        {dataListings.map((property) => (
          <tr key={property.id}>
            <th scope="row">
              <div className="listing-style1 dashboard-style d-xxl-flex align-items-center mb-0">
                <div className="list-thumb">
                  <Image
                    width={110}
                    height={94}
                    className="w-100"
                    src={property.image}
                    alt="property"
                  />
                </div>
                <div className="list-content py-0 p-0 mt-2 mt-xxl-0 ps-xxl-4">
                  <div className="h6 list-title">
                    <Link href={`/single-v1/${property.title}`}>
                      {property.title}
                    </Link>
                  </div>
                  <p className="list-text mb-0">{property.city}</p>
                  <div className="list-price">
                    <a href="#">{property.price}</a>
                  </div>
                </div>
              </div>
            </th>
            <td className="vam">{property.createDate}</td>
            <td className="vam">
              <span className={getStatusStyle(property.status)}>
                {property.status}
              </span>
            </td>
            <td className="vam">{property.forRent === 1 ? "Arriendo" : "Venta"}</td>
            <td className="vam">
              <div className="d-flex">
                {/* <button
                  className="icon"
                  style={{ border: "none" }}
                  data-tooltip-id={`edit-${property.id}`}>
                  <span className="fas fa-pen fa" />
                </button> */}
               <button
                    className="icon"
                    style={{ border: "none" }}
                    data-tooltip-id={`delete-${property.id}`}
                    onClick={() => handleDelete(property.id, property.title)}
                  >
                    <span className="flaticon-bin" />
                  </button>

                {/* <ReactTooltip
                  id={`edit-${property.id}`}
                  place="top"
                  content="Edi"
                /> */}
                <ReactTooltip
                  id={`delete-${property.id}`}
                  place="top"
                  content="ELiminar propiedad"
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default PropertyDataTable;
