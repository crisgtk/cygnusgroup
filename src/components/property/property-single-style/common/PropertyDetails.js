import React from "react";

const PropertyDetails = ({ id, listings }) => {

  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];

  if (!data) {
    return <div>Loading...</div>;
  }


  const columns = [
    [
      {
        label: "ID Interno",
        value: data.id,
      },
      {
        label: "Precio",
        value: data.price,
      },
      {
        label: "Tamaño",
        value:  data.sqft + "mts/2",
      },
      {
        label: "Piezas",
        value: data.bath,
      },
      {
        label: "Baños",
        value: data.bed,
      },
    ],
    [
      {
        label: "Garage",
        value: data.Garaje,
      },
      {
        label: "Tamaño Garaje",
        value: "N/A",
      },
      {
        label: "Año construcción",
        value: data.yearBuilding,
      },
      {
        label: "Tipo",
        value: data.propertyName,
      },
      {
        label: "Estado propiedad",
        value: data.forRent ? "Arriendo" : "Venta",
      },
    ],
  ];

  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`col-md-6 col-xl-4${
            columnIndex === 1 ? " offset-xl-2" : ""
          }`}>
          {column.map((detail, index) => (
            <div key={index} className="d-flex justify-content-between">
              <div className="pd-list">
                <p className="fw600 mb10 ff-heading dark-color">
                  {detail.label}
                </p>
              </div>
              <div className="pd-list">
                <p className="text mb10">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
