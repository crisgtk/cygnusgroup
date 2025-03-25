"use client";
import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { formatCurrency } from "@/utilis/formatCurrency";


const PriceRange = ({ filterFunctions, priceRange }) => {
  const [price, setPrice] = useState([
    filterFunctions?.priceRange?.[0] || 0,
    filterFunctions?.priceRange?.[1] || 900000000,
  ]);

  const handleOnChange = (value) => {
    setPrice(value);
    filterFunctions?.handlepriceRange([value[0] || 0, value[1]]);
  };

  return (
    <div className="range-wrapper">
      <Slider
        range
        max={900000000} 
        min={0} 
        step={500000} 
        defaultValue={price}
        onChange={handleOnChange}
      />
      <div className="d-flex align-items-center mt-2">
        <span id="slider-range-value1">{formatCurrency(price[0])}</span>
        <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
        <span id="slider-range-value2">{formatCurrency(price[1])}</span>
      </div>
    </div>
  );
};

export default PriceRange;
