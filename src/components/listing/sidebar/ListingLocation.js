"use client";

import React from "react";

const ListingLocation = ({ filterFunctions }) => {
  const options = [
    { id: "flexRadioDefault3", label: "All Cities", display: "Todos" , defaultChecked: true },
    { id: "flexRadioDefault1", label: "Arica", display: "Arica" },
    { id: "flexRadioDefault2", label: "Santiago", display: "Santiago" },
  ];

  return (
    <>
      {options.map((option) => (
        <div
          className="form-check d-flex align-items-center mb10"
          key={option.id}>
          <input
            className="form-check-input"
            type="radio"
            checked={filterFunctions?.ListingLocation == option.label}
            onChange={() => filterFunctions.handlelocation(option.label)}
          />
          <label className="form-check-label" htmlFor={option.id}>
            {option.display}
          </label>
        </div>
      ))}
    </>
  );
};

export default ListingLocation;
