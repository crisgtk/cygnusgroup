"use client";

import React from "react";

const OverView = ({ id, listings }) => {

  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];

  if (!data) {
    return <div>Loading...</div>;
  }
  
  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Piezas",
      value: data.bed,
    },
    {
      icon: "flaticon-shower",
      label: "Baños",
      value: data.bath,
    },
    {
      icon: "flaticon-event",
      label: "Año contrucción",
      value: data.yearBuilding,
    },
    {
      icon: "flaticon-garage",
      label: "Garage",
      value: data.Garaje,
      xs: true,
    },
    {
      icon: "flaticon-expand",
      label: "mts/2",
      value: data.sqft,
      xs: true,
    },
    {
      icon: "flaticon-home-1",
      label: "tipo de propiedad",
      value: data.propertyName,
    },
  ];

  return (
    <>
      {overviewData.map((item, index) => (
        <div
          key={index}
          className={`col-sm-6 col-lg-4 ${item.xs ? "mb25-xs" : "mb25"}`}>
          <div className="overview-element d-flex align-items-center">
            <span className={`icon ${item.icon}`} />
            <div className="ml15">
              <h6 className="mb-0">{item.label}</h6>
              <p className="text mb-0 fz15">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OverView;
