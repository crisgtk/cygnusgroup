import React from "react";

const PropertyDetails = () => {
  const columns = [
    [
      {
        label: "ID Interno",
        value: "RT48",
      },
      {
        label: "Precio",
        value: "$19.900.000",
      },
      {
        label: "Tamaño",
        value: "1200 mts/2",
      },
      {
        label: "Piezas",
        value: "3",
      },
      {
        label: "Baños",
        value: "2",
      },
    ],
    [
      {
        label: "Garage",
        value: "2",
      },
      {
        label: "Tamaño Garaje",
        value: "200 mts/2",
      },
      {
        label: "Año construcción",
        value: "2022",
      },
      {
        label: "Tipo",
        value: "Departamento",
      },
      {
        label: "Estado propiedad",
        value: "Disponible",
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
