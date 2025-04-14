"use client";
import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Slider, { Range } from "rc-slider";

import LookingFor from "./LookingFor";
import Location from "./Location";
import { formatCurrency } from "@/utilis/formatCurrency";
import getUFValue from "@/server/ufVaule";

const FilterContent = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("buy");
  const [description, setDescription] = useState("");
  const [inqueryType, setInqueryType] = useState([]);
  const [city, setCity] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const tabs = [
    { id: "buy", label: "Venta" },
    { id: "rent", label: "Arriendo" },
    // { id: "sold", label: "Sold" },
  ];

  const [price, setPrice] = useState([0, 0]);
  const [uf, setUf] = useState(0);


  useEffect(() => {
    const fetchUFValue = async () => {
      try {
        const dailyUfValue = await getUFValue();
        setUf(dailyUfValue);
      } catch (error) {
        console.error("Error fetching UF value:", error);
      }
    };
    fetchUFValue();
  }, []);

  // price range handler
  const handleOnChange = async (value) => {
    setPrice(value);
  };

  const handleClick = () => {
    router.push(`/grid-full-3-col?buy=${activeTab}&description=${description}&property=${inqueryType.value}&city=${city.value}&price=${price}`);
  };

  return (
    <div className="advance-style4 at-home5 mt-100 mt50-lg mb10 mx-auto animate-up-2">
      <ul className="nav nav-tabs p-0 m-0">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}>
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content text-start">
        {tabs.map((tab) => (
          <div
            className={`${activeTab === tab.id ? "active" : ""} tab-pane`}
            key={tab.id}>
            <div className="advance-content-style3 at-home5">
              <div className="row align-items-center">
                <div className="col-md-4 col-xl-3 bdrr1 bdrrn-sm">
                  <label>Ingresa descripción</label>
                  <div className="advance-search-field position-relative">
                    <form className="form-search position-relative">
                      <div className="box-search">
                        <input
                          className="form-control bgc-f7 bdrs12 ps-0"
                          type="text"
                          name="search"
                          placeholder={`Busqueda por ${tab.label}`
                        }
                        onChange={(e) => setDescription(e.target.value)}
                        disabled
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/* End .col-3 */}

                <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                  <div className="mt-3 mt-md-0 px-0">
                    <div className="bootselect-multiselect">
                      <label className="fz14">Busqueda por</label>
                      <LookingFor setInqueryType={setInqueryType}/>
                    </div>
                  </div>
                </div>
                {/* End col-md-4 */}

                <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                  <div className="mt-3 mt-md-0">
                    <div className="bootselect-multiselect">
                      <label className="fz14">Lugar</label>
                      <Location setCity={setCity}/>
                    </div>
                  </div>
                </div>
                {/* End col-md-4 */}

                <div className="col-md-4 col-xl-2 bdrr1 bdrrn-sm px20 pl15-sm">
                  <div className="mt-3 mt-md-0">
                    <div className="dropdown-lists">
                      <label className="fz14 mb-1">Precio</label>
                      <div
                        className="btn open-btn text-start dropdown-toggle"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        style={{ fontSize: "12px" }}>
                        {formatCurrency(price[0])} - {formatCurrency(price[1])}{" "}
                        <i className="fas fa-caret-down" />
                      </div>
                      <div className="dropdown-menu">
                        <div className="widget-wrapper pb20 mb0 pl20 pr20">
                          <div className="range-wrapper at-home10">
                            <Slider
                              range
                              max={900000000}
                              min={0}
                              step={500000}
                              // defaultValue={price}
                              onChange={(value) => handleOnChange(value)}
                              id="slider"
                            />
                            <div className="d-flex align-items-center">
                              <span id="slider-range-value1">{formatCurrency(price[0])}</span>
                              <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
                              <span id="slider-range-value2">{formatCurrency(price[1])}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End col-md-4 */}

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                  <div className="form-control bgc-f7 bdrs12 ps-0">
                  <label className="fz14 mb-1">UF</label>
                    <span className="mx-2">{(price[0] / uf).toFixed(2) }</span> UF
                    <span className="mx-2">{(price[1] / uf).toFixed(2) }</span> UF
                  </div>
                    {/* <button
                      className="advance-search-btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#advanceSeachModal">
                      <span className="flaticon-settings" /> Advanced
                    </button> */}
                    <button
                      className="advance-search-icon ud-btn btn-thm ms-4"
                      type="button"
                      onClick={handleClick}>
                      <span className="flaticon-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterContent;
