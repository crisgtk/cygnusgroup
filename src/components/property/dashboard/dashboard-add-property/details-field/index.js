"use client";

import React from "react";
import MultiSelectField from "./MultiSelectField";
import StructureType from "./StructureType";

const DetailsFiled = ({setSqft, setBedrooms, setBathrooms, setYearBuilt, register, errors}) => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              mts2
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="mts2"
              id="mts"
              {...register("mts", { required: "Los mts2 son obligatorios" })}
              onChange={(e) => setSqft(e.target.value)}
            />
               {errors.mts && (
              <span className="text-danger">{errors.mts.message}</span>
            )}
          </div>
        </div>

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Tamaño del lote en pies (solo números)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div> */}

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Habitaciones
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div> */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Dormitorios
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Dormitorios"
              {...register("bedrooms", { required: "Los dormitorios son obligatorios" })}
              onChange={(e) => setBedrooms(e.target.value)}
            />
            {errors.bedrooms && (
              <span className="text-danger">{errors.bedrooms.message}</span>
            )}
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Baños</label>
            <input
              type="number"
              className="form-control"
              placeholder="Baños"
              {...register("bathrooms", { required: "Los baños son obligatorios" })}
              onChange={(e) => setBathrooms(e.target.value)}
            />
            {errors.bathrooms && (
              <span className="text-danger">{errors.bathrooms.message}</span>
            )}
          </div>
        </div>
{/* 
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              ID personalizado (texto)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div> */}

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Garajes
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div> */}
{/* 
        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Tamaño del garaje
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div> */}

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Año de construcción (numérico)
            </label>
            <input type="number" className="form-control"  
            {...register("yearBuilt", { required: "El año de construcción es obligatorio" })}
            placeholder="Años"
            onChange={(e) => setYearBuilt(e.target.value)}/>
            {errors.yearBuilt && (
              <span className="text-danger">{errors.yearBuilt.message}</span>
            )}
          </div>
        </div>

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Disponible desde (fecha)
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="99.aa.aaaa"
            />
          </div>
        </div> */}

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Sótano
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div> */}

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Detalles extra
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Techo</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div> */}

        {/* <div className="col-sm-6 col-xl-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Material Exterior
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu Nombre"
            />
          </div>
        </div> */}

        {/* <StructureType /> */}
      </div>

      {/* <div className="row">
        <MultiSelectField />

        <div className="col-sm-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              Notas del propietario/agente (no visible en el frontend)
            </label>
            <textarea
              cols={30}
              rows={5}
              placeholder="Hay muchas variaciones de pasajes."
              defaultValue=""
            />
          </div>
        </div>
      </div> */}
    </form>
  );
};

export default DetailsFiled;
