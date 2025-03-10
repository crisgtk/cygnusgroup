"use client";
import Select from "react-select";
import React, { useEffect, useState } from "react";
import { getLocationTransform } from "@/transform/propertiesTransform";

const Location = () => {
  const [inqueryType, setInqueryType] = useState([]);

  // const inqueryType = [
  //   { value: "New York", label: "Concepción" },
  //   { value: "Los Angeles", label: "Chillan" },
  //   { value: "London", label: "Florida" },
  //   { value: "Paris", label: "Ñuble" },
  // ];

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };

  useEffect(() => {
    const loadLocation = async () => {
      try {
        const getLocation = await getLocationTransform();
        setInqueryType(getLocation);
      } catch (error) {
        console.error("Error al cargar las regiones:", error);
      }
    };

    loadLocation();
  }, []);
  return (
    <>
      <Select
        defaultValue={[inqueryType[0]]}
        name="colors"
        options={inqueryType}
        styles={customStyles}
        className="text-start select-borderless"
        classNamePrefix="select"
        required
        isClearable={false}
      />
    </>
  );
};

export default Location;
