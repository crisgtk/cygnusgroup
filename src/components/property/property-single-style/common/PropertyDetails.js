import getUFValue from "@/server/ufVaule";
import React, { useEffect, useState } from "react";

const PropertyDetails = ({ id, listings }) => {

  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
   const [uf, setUf] = useState(0);



      useEffect(() => {
        const fetchUFValue = async () => {
          try {
            const dailyUfValue = await getUFValue();
            setUf(dailyUfValue);
            console.log("Valor UF del día:", dailyUfValue);
          } catch (error) {
            console.error("Error fetching UF value:", error);
          }
        };
        fetchUFValue();
      }, []);

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
        label: "UF Precio",
        value:  "UF " + (
                                    parseFloat(data.price.replace(/[^0-9]/g, '')) /
                                    parseFloat(String(uf ?? '1').replace(/[^0-9.]/g, ''))
                                  ).toLocaleString('es-CL', { minimumFractionDigits: 0, maximumFractionDigits: 0 }),
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
