"use client";

import React from "react";
import SelectMulitField from "./SelectMulitField";
import Map from "./Map";

const LocationField = ({setAddress, setComuna, setCity, setCountry, setLatitude, setLongitude, register, errors, Controller, control}) => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Dirección"
              id="direccion"
              {...register("direccion", { required: "La dirección es obligatoria" })}
              onChange={(e) => setAddress(e.target.value)}
            />
              {errors.direccion && (
              <span className="text-danger">{errors.direccion.message}</span>
            )}
          </div>
        </div>
        {/* End col-12 */}

        <SelectMulitField  setCity={setCity} setCountry={setCountry} Controller={Controller} control={control} errors={errors}/>

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Código postal
            </label>
            <input type="text" className="form-control" />
          </div>
        </div> */}
        {/* End col-4 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Localidad</label>
            <input
              type="text"
              className="form-control"
              placeholder="Otra descripción"
              id="location"
              {...register("location", { required: "La localidad es obligatoria" })}
              onChange={(e) => setComuna(e.target.value)}
            />
               {errors.location && (
              <span className="text-danger">{errors.location.message}</span>
            )}
          </div>
        </div>
        {/* End col-4 */}

        {/* <div className="col-sm-12">
          <div className="mb20 mt30">
            <label className="heading-color ff-heading fw600 mb30">
              Ingrese latitude y longitude
            </label>
            <Map />
          </div>
        </div> */}
        {/* End col-12 */}
      </div>
      {/* End .row */}

      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Latitude
            </label>
            <input type="number" className="form-control" 
             id="latitude"
             {...register("latitude", { required: "La latidude es obligatoria" })}
            onChange={(e) => setLatitude(e.target.value)}  />
                {errors.latitude && (
              <span className="text-danger">{errors.latitude.message}</span>
            )}
          </div>
        </div>
        {/* End .col-sm-6 */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb30">
            <label className="heading-color ff-heading fw600 mb10">
              Longitude
            </label>
            <input type="number" className="form-control" 
            id="longitude"
            {...register("longitude", { required: "La longitude es obligatoria" })}
            onChange={(e) => setLongitude(e.target.value)}  />
                {errors.longitude && (
              <span className="text-danger">{errors.longitude.message}</span>
            )}
          </div>
        </div>
      </div>
      {/* End .row */}
    </form>
  );
};

export default LocationField;
